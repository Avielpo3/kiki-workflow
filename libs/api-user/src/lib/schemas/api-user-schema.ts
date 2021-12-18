import { User } from '@kiki-workspace/api-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = DboUser & Document;

export const userDboToJson = (doc, ret: UserDocument, options) => {
  delete ret.password;
  delete ret.__v;

  if (options) {
    console.log(options);
  }

  const user: User = {
    email: ret.email,
    id: ret._id,
  };

  return user;
};

@Schema({
  toJSON: {
    transform: userDboToJson,
  },
})
export class DboUser implements OmittedUser {
  @Prop({
    required: true,
    type: String,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
  })
  password: number;
}
export const UserSchema = SchemaFactory.createForClass(DboUser);

type OmittedUser = Omit<User, 'id'>;
