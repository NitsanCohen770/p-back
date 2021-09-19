import express from 'express';
import { Routes } from './interfaces/routes.interface';
declare class App {
    app: express.Application;
    port: string | number;
    env: string;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): express.Application;
    private connectToDatabase;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeSwagger;
    private initializeErrorHandling;
}
export default App;
