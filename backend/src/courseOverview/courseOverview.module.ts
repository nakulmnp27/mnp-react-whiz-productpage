import { Module } from '@nestjs/common'
import { CourseOverviewController } from './courseOverview.controller'
import { CourseOverviewService } from './courseOverview.service'
import { PrismaCourseOverviewRepository } from './courseOverview.repository'

@Module({
  controllers: [CourseOverviewController],
  providers: [
    CourseOverviewService,
    PrismaCourseOverviewRepository ,
  ]
})
export class CourseOverviewModule {}