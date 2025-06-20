import { Router } from "express";
import { sayHello } from "../app.controller.js";
const router = Router();

router.get( "/", sayHello );

export default router;