import { model, models, Schema, Document } from 'mongoose';
import { FunnyMessage } from '@interfaces/funnyMessage';

const FunnyMessage: Schema = new Schema({
  message: {
    type: String,
    required: true,
  },
});

const funnyMessageModel = models.FunnyMessage || model<FunnyMessage & Document>('FunnyMessage', FunnyMessage);

export default funnyMessageModel;
