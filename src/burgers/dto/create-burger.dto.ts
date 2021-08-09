import { ObjectId } from 'mongoose';

export class CreateBurgerDto {
  name: string;
  ingredients: ObjectId[];
}
