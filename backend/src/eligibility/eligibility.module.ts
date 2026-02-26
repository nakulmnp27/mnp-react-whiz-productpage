import { Module } from '@nestjs/common'
import { EligibilityController } from './eligibility.controller'
import { EligibilityService } from './eligibility.service'
import { PrismaEligibilityRepository } from './eligibility.repository'


@Module({
  controllers: [EligibilityController],
  providers: [
    EligibilityService,
    PrismaEligibilityRepository,
  ],
})
export class EligibilityModule {}