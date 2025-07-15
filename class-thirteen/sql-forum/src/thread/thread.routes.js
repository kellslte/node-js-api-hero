import { Router } from "express";
import { getThreadById, getThreads } from "./thread.controller.js";
import { checkAuthentication } from "../middleware/auth.middleware.js";

export const threadRouter = Router();

// Get all threads (optionally by userId)
threadRouter.get("/", checkAuthentication, getThreads);

// Get thread by id
threadRouter.get("/:id", checkAuthentication, getThreadById);

// Create thread
threadRouter.post("/", checkAuthentication);

// Update thread
threadRouter.put(
  "/:id",
  catchAsync(async (req, res) => {
    const updated = await updateThread(req.params.id, req.body);
    if (!updated) return sendResponse(res, 404, false, "Thread not found");
    sendResponse(res, 200, true, "Thread updated successfully");
  })
);

// Delete thread
threadRouter.delete(
  "/:id",
  catchAsync(async (req, res) => {
    const deleted = await deleteThread(req.params.id);
    if (!deleted) return sendResponse(res, 404, false, "Thread not found");
    sendResponse(res, 200, true, "Thread deleted successfully");
  })
); 