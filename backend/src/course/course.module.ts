import { Module } from '@nestjs/common'
import { CourseController } from './course.controller'
import { CourseService } from './course.service'
import { PrismaCourseRepository } from './course.repository'

@Module({
  controllers: [CourseController],
  providers: [
    CourseService,
    PrismaCourseRepository,
  ],
})
export class CourseModule {}