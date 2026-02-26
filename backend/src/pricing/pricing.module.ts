import { Module } from '@nestjs/common'
import { PricingController } from './pricing.controller'
import { PricingService } from './pricing.service'
import { PrismaPricingRepository } from './pricing.repository'

@Module({
  controllers: [PricingController],
  providers: [
    PricingService,
    PrismaPricingRepository,
  ],
})
export class PricingModule {}