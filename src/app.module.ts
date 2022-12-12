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
import {ServeStaticModule} from '@nestjs/serve-static'
import { Comment } from './comments/comments.model';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
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
    AuthModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
