import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createServer } from "http";
import { sendResponse } from "./common/utils.common.js";
import appRouter from "./routes/index.js";

const app = express();
const server = createServer( app );

app.use( cors() );
app.use( helmet() );
app.use( compression() );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.use( "/api", appRouter );

app.use( ( req, res ) =>
{
    const message = `The url ${req.url} does not exist for the ${req.method.toLowerCase()} method on this server`;

    sendResponse( res, 404, false, message, null );
})


export { app, server };