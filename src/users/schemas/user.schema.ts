import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 2,
    maxlength: 20,
  })
  name: string;

  @Prop({
    select: false,
    required: true,
  })
  passwordHash: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
