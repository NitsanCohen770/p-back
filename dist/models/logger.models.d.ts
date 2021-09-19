import { Document } from 'mongoose';
import { UserActions } from '../interfaces/userActions';
declare const userModel: import("mongoose").Model<any, {}, {}> | import("mongoose").Model<UserActions & Document<any, any, any>, {}, {}>;
export default userModel;
