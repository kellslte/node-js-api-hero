import { Router } from "express";
import { getServerHealthStatus, sayHello } from "../app.controller.js";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../todos/todo.controller.js";
import { login, register, getAuthUser } from "../auth/auth.controller.js";
import { checkAuthentication } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/health", getServerHealthStatus);
router.get("/", sayHello);

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/me", checkAuthentication, getAuthUser);

router.get("/todos", checkAuthentication, getTodos);
router.get("/todos/:id", checkAuthentication, getTodoById);
router.post("/todos", checkAuthentication, createTodo);
router.put("/todos/:id", checkAuthentication, updateTodo);
router.delete("/todos/:id", checkAuthentication, deleteTodo);

export default router;
