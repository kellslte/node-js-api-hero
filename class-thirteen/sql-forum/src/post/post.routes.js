import { Router } from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "./post.service.js";
import { catchAsync, sendResponse } from "../common/utils.common.js";

export const postRouter = Router();

// Get all posts (optionally by threadId)
postRouter.get(
  "/",
  catchAsync(async (req, res) => {
    const { threadId } = req.query;
    const posts = await getPosts(threadId);
    sendResponse(res, 200, true, "Posts fetched successfully", posts);
  })
);

// Get post by id
postRouter.get(
  "/:id",
  catchAsync(async (req, res) => {
    const post = await getPostById(req.params.id);
    if (!post) return sendResponse(res, 404, false, "Post not found");
    sendResponse(res, 200, true, "Post fetched successfully", post);
  })
);

// Create post
postRouter.post(
  "/",
  catchAsync(async (req, res) => {
    const post = await createPost(req.body);
    sendResponse(res, 201, true, "Post created successfully", post);
  })
);

// Update post
postRouter.put(
  "/:id",
  catchAsync(async (req, res) => {
    const updated = await updatePost(req.params.id, req.body);
    if (!updated) return sendResponse(res, 404, false, "Post not found");
    sendResponse(res, 200, true, "Post updated successfully");
  })
);

// Delete post
postRouter.delete(
  "/:id",
  catchAsync(async (req, res) => {
    const deleted = await deletePost(req.params.id);
    if (!deleted) return sendResponse(res, 404, false, "Post not found");
    sendResponse(res, 200, true, "Post deleted successfully");
  })
); 