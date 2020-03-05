import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {
  }

  public sendEmail(body): Promise<JSON> {
   return this
      .mailerService
      .sendMail({
        to: 'basic15pl@gmail.com', // list of receivers
        from: process.env.EMAIL_NAME, // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcomeh1 </b>'+body.name + ' to the jungle', // HTML body content
      })
      .then((success) => {
        return success;})
      .catch((err) => {
        return err;
      });
  }

  async sendEmail2(body): Promise<JSON>{
    return body;
  }


}
