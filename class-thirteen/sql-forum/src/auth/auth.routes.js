import { Router } from "express";
import { checkAuthentication } from "../middleware/auth.middleware.js";

export const authRouter = Router();
// Auth routes will be added here 

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", checkAuthentication, getAuthUser);