import { createTRPCRouter } from "~/server/api/trpc";
import { transactionRouter } from "./routers/transaction";
import { registerdCardsRouter } from "./routers/registeredCards";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  transaction: transactionRouter,
  registerdCards: registerdCardsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
