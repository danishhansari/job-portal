import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from "@clerk/nextjs/server";

export const userRouter = createTRPCRouter({
  getUserInfo: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const user = await clerkClient.users.getUser(input.userId);
      return user;
    }),

  updateRole: publicProcedure
    .input(
      z.object({
        role: z.enum(["candidate", "recruiter"]),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { role, userId } = input;

      try {
        await clerkClient.users.updateUser(userId, {
          publicMetadata: { role },
        });

        return { success: true };
      } catch (error) {
        console.error("Error updating user role:", error);
        throw new Error("Failed to update user role");
      }
    }),
});
