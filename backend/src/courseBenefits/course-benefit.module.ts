import { Module } from '@nestjs/common'
import { CourseBenefitsController } from './course-benefit.controller'
import { CourseBenefitsService } from './course-benefit.service'
import { PrismaBenefitsRepository } from './course-benefit.repository'

@Module({
  controllers: [CourseBenefitsController],
  providers: [
    CourseBenefitsService,
    PrismaBenefitsRepository
  ]
})
export class CourseBenefitsModule {}