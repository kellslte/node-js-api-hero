import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createServer } from "http";
import router from "./routes/index.js";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(helmet());
app.use( compression() );

app.use( "/api/v1", router );

export { app, server };