import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const registerdCardsRouter = createTRPCRouter({
    createRegisteredCard: publicProcedure.input(
        z.object({
            mask: z.string(),
            date: z.string(),
            dataKey: z.string(),
            issuerId: z.string(),
        })).mutation(
            async ({ ctx, input: values }) => {

                const transaction = await ctx.prisma.registerdCreditCard.create({
                    data: values
                });

                return transaction;
            }
        ),

    getRegisteredCards: publicProcedure.query(async ({ ctx }) => {
        const transaction = await ctx.prisma.registerdCreditCard.findMany(
            {
                take: 100,
                orderBy: [{ createdAt: "desc" }],
            });
        return transaction;
    })

})