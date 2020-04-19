import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './dot-dev/projects/projects.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [EmailSenderModule, ConfigModule.forRoot(), MailerModule.forRoot({
    transport: {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,// upgrade later with STARTTLS
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    },

    defaults: {
      from:'"Mailer .Dev" ',
    },
  }), UsersModule, UsersModule, ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog', {useNewUrlParser: true, useUnifiedTopology: true}),
    ServeStaticModule.forRoot({rootPath: join(__dirname, "..", 'static')}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
