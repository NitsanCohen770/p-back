import UsersController from '../controllers/users.controller';
import { Routes } from '../interfaces/routes.interface';
declare class UsersRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    usersController: UsersController;
    constructor();
    private initializeRoutes;
}
export default UsersRoute;
