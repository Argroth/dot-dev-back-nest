import { Body, Controller, Post, Res } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';

@Controller('email-sender')
export class EmailSenderController {
  constructor(private emailSenderService: EmailSenderService) {}

  @Post()
  async sendEmail(@Res() res, @Body() body){
    console.log(body);
    const emailRes = await this.emailSenderService.sendEmail(body);
    return res.json(emailRes);
  }

}
