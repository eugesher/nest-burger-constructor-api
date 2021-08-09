import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Valuable } from '../../utils/Valuable';
import * as mongoose from 'mongoose';
import { Ingredient } from '../../ingredients/schemas/ingredient.schema';
import { User } from '../../users/schemas/user.schema';

@Schema()
export class Burger extends Valuable {
  @Prop({
    required: true,
    minLength: 2,
    maxLength: 100,
  })
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
    ],
    required: true,
  })
  ingredients: Ingredient[];

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
}

export type BurgerDocument = Burger & Document;

export const BurgerSchema = SchemaFactory.createForClass(Burger);
