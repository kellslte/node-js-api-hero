import * as threadService from "./thread.service.js";
import { catchAsync, sendResponse } from "../common/utils.common.js";

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
  const thread = await threadService.createThread(req.body);
  sendResponse(res, 201, true, "Thread created successfully", thread);
});