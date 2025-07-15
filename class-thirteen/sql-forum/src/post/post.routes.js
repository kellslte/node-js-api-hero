import { Router } from "express";
import { checkAuthentication } from "../middleware/auth.middleware.js";
import { createPost, deletePost, getPostById, getPosts, updatePost } from "./post.controller.js";

export const postRouter = Router();

// Get all posts (optionally by threadId)
postRouter.get("/", checkAuthentication, getPosts);

// Get post by id
postRouter.get("/:id", checkAuthentication, getPostById);

// Create post
postRouter.post("/", checkAuthentication, createPost);

// Update post
postRouter.put("/:id", checkAuthentication, updatePost);

// Delete post
postRouter.delete("/:id", checkAuthentication, deletePost); 