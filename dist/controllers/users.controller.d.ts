import { NextFunction, Request, Response } from 'express';
import { MessagesService, UserActionsService } from '../services/users.service';
declare class UsersController {
    userActionsService: UserActionsService;
    messagesService: MessagesService;
    getRandomMessage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createUserAction: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default UsersController;
