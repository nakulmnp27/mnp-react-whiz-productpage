import { Module } from '@nestjs/common'
import { FaqsController } from './faq.controller'
import { FaqsService } from './faq.service'
import { PrismaFaqsRepository } from './faq.repository'


@Module({
  controllers: [FaqsController],
  providers: [
    FaqsService,
    PrismaFaqsRepository,
  ],
})
export class FaqsModule {}