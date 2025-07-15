import * as postService from "./post.service.js";
import { catchAsync, sendResponse } from "../common/utils.common.js";
import { createPostSchema, updatePostSchema } from "./post.schema.js";
import { UnprocessibleEntityError } from "../common/errors.common.js";

export const getPosts = catchAsync(async (req, res) => {
  const { threadId } = req.query;
  const posts = await postService.getPosts(threadId);
  sendResponse(res, 200, true, "Posts fetched successfully", posts);
});

export const getPostById = catchAsync(async (req, res) => {
  const post = await postService.getPostById(req.params.id);
  if (!post) return sendResponse(res, 404, false, "Post not found");
  sendResponse(res, 200, true, "Post fetched successfully", post);
});

export const createPost = catchAsync(async (req, res) => {
  const { threadId } = req.params;
  const { sub: userId } = req.user;

  const result = createPostSchema.safeParse({
    ...req.body,
    userId,
    threadId,
  });

  if (result.error)
    throw new UnprocessibleEntityError(
      "The request failed with the following errors",
      result.error.issues
    );

  const post = await postService.createPost(result.data);
  sendResponse(res, 201, true, "Post created successfully", post);
});

export const updatePost = catchAsync(async (req, res) => {
  const result = updatePostSchema.safeParse(req.body);

  if (result.error)
    throw new UnprocessibleEntityError(
      "The request failed with the following errors",
      result.error.issues
    );

  const { sub: userId } = req.user;

  const updated = await postService.updatePost(req.params.id, {
    userId,
    ...result.data,
  });
  if (!updated) return sendResponse(res, 404, false, "Post not found");
  sendResponse(res, 200, true, "Post updated successfully");
});

export const deletePost = catchAsync(async (req, res) => {
  const { sub: userId } = req.user;

  const deleted = await postService.deletePost(req.params.id, userId);
  if (!deleted) return sendResponse(res, 404, false, "Post not found");
  sendResponse(res, 200, true, "Post deleted successfully");
});
