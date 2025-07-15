import { Router } from "express";
import {
  createThread,
  deleteThread,
  getThreadById,
  getThreads,
  updateThread,
} from "./thread.controller.js";
import { checkAuthentication } from "../middleware/auth.middleware.js";

export const threadRouter = Router();

// Get all threads (optionally by userId)
threadRouter.get("/", checkAuthentication, getThreads);

// Get thread by id
threadRouter.get("/:id", checkAuthentication, getThreadById);

// Create thread
threadRouter.post("/", checkAuthentication, createThread);

// Update thread
threadRouter.put("/:id", checkAuthentication, updateThread);

// Delete thread
threadRouter.delete("/:id", checkAuthentication, deleteThread);
