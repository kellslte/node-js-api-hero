import { Router } from "express";
import { getServerHealthStatus, sayHello } from "../app.controller.js";
import { threadRouter } from "../thread/thread.routes.js";
import { postRouter } from "../post/post.routes.js";
import { authRouter } from "../auth/auth.routes.js";

export const forumRouter = Router();

forumRouter.get("/hello", sayHello);
forumRouter.get("/health", getServerHealthStatus);


forumRouter.use("/threads", threadRouter);
forumRouter.use("/posts", postRouter);
forumRouter.use("/auth", authRouter); 