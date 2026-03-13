import { Module } from '@nestjs/common'
import { ExamDetailController } from './exam-detail.controller'
import { ExamDetailService } from './exam-detail.service'
import { PrismaExamDetailRepository } from './exam-detail.repository'

@Module({
  controllers: [ExamDetailController],
  providers: [
    ExamDetailService,
    PrismaExamDetailRepository
  ]
})

export class ExamDetailModule {}