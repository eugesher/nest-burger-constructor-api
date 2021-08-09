import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';

@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Post()
  create(@Body() createBurgerDto: CreateBurgerDto) {
    return this.burgersService.create(createBurgerDto);
  }

  @Get()
  findAll() {
    return this.burgersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burgersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBurgerDto: UpdateBurgerDto) {
    return this.burgersService.update(+id, updateBurgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgersService.remove(+id);
  }
}
