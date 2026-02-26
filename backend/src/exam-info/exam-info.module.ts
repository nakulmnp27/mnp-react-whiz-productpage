import { Module } from '@nestjs/common'
import { ExamInfoController } from './exam-info.controller'
import { ExamInfoService } from './exam-info.service'
import { PrismaExamInfoRepository } from './exam-info.repository'
@Module({
  controllers: [ExamInfoController],
  providers: [
    ExamInfoService,
    PrismaExamInfoRepository,
  ],
})
export class ExamInfoModule {}