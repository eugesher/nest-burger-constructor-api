import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { BurgersModule } from './burgers/burgers.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, IngredientsModule, BurgersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
