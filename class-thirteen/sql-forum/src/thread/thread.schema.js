import { z } from "zod";

export const createThreadSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  userId: z.string().uuid("Invalid user ID"),
});

export const updateThreadSchema = z.object({
  title: z.string().min(3).optional(),
  content: z.string().min(10).optional(),
});
