import *  as postService from "./post.service.js";
import { catchAsync, sendResponse } from "../common/utils.common.js";

export const getPosts = catchAsync(async (req, res) => {
  const { threadId } = req.query;
  const posts = await postService.getPosts(threadId);
  sendResponse(res, 200, true, "Posts fetched successfully", posts);
} );

export const getPostById = catchAsync(async (req, res) => {
  const post = await postService.getPostById(req.params.id);
  if (!post) return sendResponse(res, 404, false, "Post not found");
  sendResponse(res, 200, true, "Post fetched successfully", post);
} );

export const createPost = catchAsync(async (req, res) => {
  const post = await postService.createPost(req.body);
  sendResponse(res, 201, true, "Post created successfully", post);
} );

export const updatePost = catchAsync(async (req, res) => {
  const updated = await postService.updatePost(req.params.id, req.body);
  if (!updated) return sendResponse(res, 404, false, "Post not found");
  sendResponse(res, 200, true, "Post updated successfully");
} );

export const deletePost = catchAsync(async (req, res) => {
  const deleted = await postService.deletePost(req.params.id);
  if (!deleted) return sendResponse(res, 404, false, "Post not found");
  sendResponse(res, 200, true, "Post deleted successfully");
});