import * as threadService from "./thread.service.js";
import { catchAsync, sendResponse } from "../common/utils.common.js";
import { createThreadSchema, updateThreadSchema } from "./thread.schema.js";

export const getThreads = catchAsync(async (req, res) => {
  const { sub: userId } = req.user;
  const threads = await threadService.getThreads(userId);
  sendResponse(res, 200, true, "Threads fetched successfully", threads);
});

export const getThreadById = catchAsync(async (req, res) => {
  const thread = await threadService.getThreadById(req.params.id);
  if (!thread) return sendResponse(res, 404, false, "Thread not found");
  sendResponse(res, 200, true, "Thread fetched successfully", thread);
});

export const createThread = catchAsync(async (req, res) => {
  const { sub: userId } = req.user;

  const result = createThreadSchema.safeParse({
    ...req.body,
    userId,
  });

  if (result.error)
    throw new UnprocessibleEntityError(
      "The request failed with the following errors",
      result.error.issues
    );

  const thread = await threadService.createThread(result.data);
  sendResponse(res, 201, true, "Thread created successfully", thread);
});

export const updateThread = catchAsync(async (req, res) => {
  const result = updateThreadSchema.safeParse(req.body);

  if (result.error)
    throw new UnprocessibleEntityError(
      "The request failed with the following errors",
      result.error.issues
    );

  const { sub: userId } = req.user;

  const updated = await threadService.updateThread(req.params.id, {
    ...result.data,
    userId,
  });
  if (!updated) return sendResponse(res, 404, false, "Thread not found");
  sendResponse(res, 200, true, "Thread updated successfully");
});

export const deleteThread = catchAsync(async (req, res) => {
  const deleted = await threadService.deleteThread(req.params.id, req.user.sub);
  if (!deleted) return sendResponse(res, 404, false, "Thread not found");
  sendResponse(res, 200, true, "Thread deleted successfully");
});
