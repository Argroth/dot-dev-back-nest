import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

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
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
