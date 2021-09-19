import { model, models, Schema, Document } from 'mongoose';

import { UserActions } from '@/interfaces/userActions';

const userActionSchema: Schema = new Schema(
  {
    IP: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' } },
);

const userModel = models.UserActions || model<UserActions & Document>('UserActions', userActionSchema);

export default userModel;
