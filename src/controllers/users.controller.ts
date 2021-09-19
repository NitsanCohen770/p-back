import { NextFunction, Request, Response } from 'express';
import { MessagesService, UserActionsService } from '@services/users.service';
import { UserActions } from '@/interfaces/userActions';
import { FunnyMessage } from '@/interfaces/funnyMessage';

class UsersController {
  public userActionsService = new UserActionsService();
  public messagesService = new MessagesService();

  public getRandomMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findRandomMessage: FunnyMessage = await this.messagesService.getRandomMessage();
      const randomFunnyMessage = { message: findRandomMessage[0].message };
      res.status(200).json({ data: randomFunnyMessage });
    } catch (error) {
      next(error);
    }
  };

  public createUserAction = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userActionData = req.body;
      const IP = req.ip;
      const newUserAction = { ...userActionData, IP };
      const createUserData: UserActions = await this.userActionsService.createUserAction(newUserAction);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
