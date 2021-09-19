import { Schema, Document } from 'mongoose';
import { FunnyMessage } from '../interfaces/funnyMessage';
declare const FunnyMessage: Schema;
declare const funnyMessageModel: import("mongoose").Model<any, {}, {}> | import("mongoose").Model<FunnyMessage & Document<any, any, any>, {}, {}>;
export default funnyMessageModel;
