import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Valuable } from '../../utils/Valuable';
import { Document } from 'mongoose';

enum Category {
  Buns = 'buns',
  Cutlets = 'cutlets',
  Cheeses = 'cheeses',
  Vegetables = 'vegetables',
  Sauces = 'sauces',
  Bacon = 'bacon',
}

@Schema()
export class Ingredient extends Valuable {
  @Prop({
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
    maxLength: 100,
  })
  name: string;

  @Prop({
    enum: Category,
  })
  category: string;

  @Prop({
    required: true,
  })
  quantity: number;

  @Prop({
    required: true,
    get: Valuable.getPrice,
    set: Valuable.setPrice,
  })
  price: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type IngredientDocument = Ingredient & Document;

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
