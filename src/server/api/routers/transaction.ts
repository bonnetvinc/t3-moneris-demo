import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const transactionRouter = createTRPCRouter({
    createTransaction: publicProcedure.input(
        z.object({
            description: z.string(),
            credit: z.number().nullable(),
            debit: z.number().nullable(),
        })).mutation(
            async ({ ctx, input: { description, credit, debit } }) => {

                const transaction = await ctx.prisma.transaction.create({
                    data: { description, credit, debit }
                });

                return transaction;
            }
        ),

    getTransactions: publicProcedure.query(async ({ ctx }) => {
        const transaction = await ctx.prisma.transaction.findMany(
            {
                take: 100,
                orderBy: [{ createdAt: "desc" }],
            });
        return transaction;
    })

})