/// <reference types="mongoose" />
import { UserActions } from '../interfaces/userActions';
import { FunnyMessage } from '../interfaces/funnyMessage';
export declare class UserActionsService {
    usersActions: import("mongoose").Model<any, {}, {}> | import("mongoose").Model<UserActions & import("mongoose").Document<any, any, any>, {}, {}>;
    createUserAction(userActionData: UserActions): Promise<UserActions>;
}
export declare class MessagesService {
    funnyMessages: import("mongoose").Model<any, {}, {}> | import("mongoose").Model<FunnyMessage & import("mongoose").Document<any, any, any>, {}, {}>;
    getRandomMessage(): Promise<FunnyMessage[]>;
}
