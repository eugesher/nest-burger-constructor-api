import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Burger } from '../../burgers/schemas/burger.schema';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Valuable } from '../../utils/Valuable';

@Schema()
export class Order extends Valuable {
  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Burger',
      },
    ],
    required: true,
  })
  list: Burger[];

  @Prop({
    required: true,
    get: Valuable.getPrice,
    set: Valuable.setPrice,
  })
  price: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  owner: User;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type OrderDocument = Order & Document;

export const OrderSchema = SchemaFactory.createForClass(Order);
