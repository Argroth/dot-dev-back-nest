import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {
  }

  public sendEmail(body): Promise<JSON> {
    this
      .mailerService
      .sendMail({
        to: 'basic15pl@gmail.com', // list of receivers
        from: 'mail@dot-dev.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((success) => {
        console.log(success);})
      .catch((err) => {
        console.log(err);
      });
    return body;
  }

  async sendEmail2(body): Promise<JSON>{
    return body;
  }


}
