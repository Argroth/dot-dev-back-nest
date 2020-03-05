import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [EmailSenderModule, MailerModule.forRoot({
    transport: {
      host: 'smtp.zenbox.pl',
      port: 587,
      secure: false,// upgrade later with STARTTLS
      auth: {
        user: "mail@dot-dev.com",
        pass: "BHxWa3sH",
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
