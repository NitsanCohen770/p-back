import { HttpException } from '@exceptions/HttpException';
import usersActionsModel from '@models/logger.models';
import { isEmpty } from '@utils/util';
import { UserActions } from '@/interfaces/userActions';
import funnyMessageModel from '@/models/funnyMessage';
import { FunnyMessage } from '@/interfaces/funnyMessage';

export class UserActionsService {
  public usersActions = usersActionsModel;
  public async createUserAction(userActionData:UserActions): Promise<UserActions> {
    if (isEmpty(userActionData)) throw new HttpException(400, "You're not userActionData");

    const createUserData: UserActions = await this.usersActions.create({ ...userActionData });

    return createUserData;
  }
}

export class MessagesService {
  public funnyMessages = funnyMessageModel;

  public async getRandomMessage(): Promise<FunnyMessage> {
    const funnyMessage: FunnyMessage = await this.funnyMessages.aggregate([{ $sample: { size: 1 } }]);
    return funnyMessage;
  }
}
