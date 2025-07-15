import { z } from "zod";

export const createPostSchema = z.object({
  content: z.string().min(2, "Content must be at least 2 characters long"),
  userId: z.string().uuid("Invalid user ID"),
  threadId: z.string().uuid("Invalid thread ID"),
});

export const updatePostSchema = z.object({
  content: z.string().min(2).optional(),
}); 