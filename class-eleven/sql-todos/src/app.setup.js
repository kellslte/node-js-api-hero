import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createServer } from "http";
import appRouter from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { NotFoundError } from "./common/errors.common.js";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use( express.urlencoded( { extended: true } ) );

app.use( "/api", appRouter );

app.use(( req, res ) =>
{
    const message = `The requested route ${req.originalUrl} does not exists for the ${req.method.toLowerCase()} method on this server`;
    throw new NotFoundError( message );
} );

app.use( errorMiddleware );

export { app, server };