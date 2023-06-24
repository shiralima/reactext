import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      username: "root",
      host: "localhost",
      password: "z10mz10m",
      type: "mysql",
      database: "reactext",
      port: 3306,
      logging: false,
      synchronize: true,
      entities: [
        'dist/**/*.entity{.ts,.js}',
      ],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
