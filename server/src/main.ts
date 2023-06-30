import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';


var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(cookieParser())
  app.use(session({
    secret: 'ranDom-stR-as-this$$KKeepSecret<3',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 3600000
    }
  }))
  await app.listen(8080);
}
bootstrap();
