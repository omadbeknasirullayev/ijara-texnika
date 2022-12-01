import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { OrdersModule } from './orders/orders.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { Equipment } from './equipments/equipments.model';
import { Order } from './orders/orders.model';
import { Comment } from './comments/comments.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Equipment, Order, Comment],
      autoLoadModels: true,
      logging: false
    }),

    UsersModule,
    CommentsModule,
    OrdersModule,
    EquipmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
