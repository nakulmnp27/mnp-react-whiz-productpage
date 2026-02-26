import { Module } from '@nestjs/common'
import { StatsController } from './stats.controller'
import { StatsService } from './stats.service'
import { PrismaStatsRepository } from './stats.repository'

@Module({
  controllers: [StatsController],
  providers: [
    StatsService,
    PrismaStatsRepository,
  ],
})
export class StatsModule {}