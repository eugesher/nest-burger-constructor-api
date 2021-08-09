import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';

@Injectable()
export class BurgersService {
  create(createBurgerDto: CreateBurgerDto) {
    return 'This action adds a new burger';
  }

  findAll() {
    return `This action returns all burgers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} burger`;
  }

  update(id: number, updateBurgerDto: UpdateBurgerDto) {
    return `This action updates a #${id} burger`;
  }

  remove(id: number) {
    return `This action removes a #${id} burger`;
  }
}
