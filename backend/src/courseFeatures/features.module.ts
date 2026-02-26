import { Module } from '@nestjs/common'
import { FeaturesController } from './feature.controller'
import { FeaturesService } from './features.service'
import { PrismaFeaturesRepository } from './features.repository'


@Module({
  controllers: [FeaturesController],
  providers: [
    FeaturesService,
    PrismaFeaturesRepository,
  ],
})
export class FeaturesModule {}