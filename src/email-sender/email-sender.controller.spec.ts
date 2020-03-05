import { Test, TestingModule } from '@nestjs/testing';
import { EmailSenderController } from './email-sender.controller';

describe('EmailSender Controller', () => {
  let controller: EmailSenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailSenderController],
    }).compile();

    controller = module.get<EmailSenderController>(EmailSenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
