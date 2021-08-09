import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    select: false,
    required: true,
  })
  passwordHash: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
