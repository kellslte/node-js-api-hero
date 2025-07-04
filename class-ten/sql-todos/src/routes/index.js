import { Router } from "express";
import { getServerHealthStatus, sayHello } from "../app.controller.js";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../todos/todo.controller.js";

const router = Router();

router.get( "/health", getServerHealthStatus );
router.get( "/", sayHello );

router.get( '/todos', getTodos );
router.get( '/todos/:id', getTodoById );
router.post( '/todos', createTodo );
router.put( '/todos/:id', updateTodo );
router.delete( '/todos/:id', deleteTodo );

export default router;