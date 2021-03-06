/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRoutes";
import goodbyeRouter from "./GoodbyeRoutes";
import { LogInfo } from "../utils/logger";

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router()

// Activate for request to http://localhost:8000/api

// GET -> http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});


// Redirection to Routers & Controllers
server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRouter);  //http://localhost:8000/api/hello --> HelloRouter
// Add more routes to the app
server.use('/goodbye', goodbyeRouter);  //http://localhost:8000/api/gooodbye --> goodbyeRouter


export default server;

