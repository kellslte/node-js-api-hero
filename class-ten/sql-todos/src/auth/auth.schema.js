import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9]+$/, {
        message: "Username must contain only letters and numbers",
    }),
    password: z.string().min( 8 ),
    confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const loginSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});