import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {
  }

  public sendEmail(body): Promise<JSON> {
    const response = this
      .mailerService
      .sendMail({
        to: 'basic15pl@gmail.com', // list of receivers
        from: 'mail@dot-dev.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcomeh1 </b>'+body.name + 't o the jungle', // HTML body content
      })
      .then((success) => {
        return success;})
      .catch((err) => {
        return err;
      });
    return response;
  }

  async sendEmail2(body): Promise<JSON>{
    return body;
  }


}
