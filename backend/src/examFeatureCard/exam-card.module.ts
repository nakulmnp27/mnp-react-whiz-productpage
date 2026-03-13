import { Module } from '@nestjs/common'

import { ExamFeatureCardController } from './exam-card-controller'
import { ExamFeatureCardService } from './exam-card.service'
import { PrismaExamFeatureCardRepository } from './exam-card.repository'

@Module({
  controllers: [ExamFeatureCardController],
  providers: [
    ExamFeatureCardService,
    PrismaExamFeatureCardRepository,
  ],
})
export class ExamFeatureCardModule {}