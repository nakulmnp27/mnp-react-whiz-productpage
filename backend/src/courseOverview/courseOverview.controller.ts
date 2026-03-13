import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CourseOverviewService } from './courseOverview.service'
import { UpsertCourseOverviewDto } from './dto/upsert-overview.dto'

@ApiTags('Course Overview Points')
@Controller('courses/:courseId/overview-points')
export class CourseOverviewController {
  constructor(private service: CourseOverviewService) {}

  @Get()
  getPoints(@Param('courseId') courseId: string) {
    return this.service.getPoints(BigInt(courseId))
  }

  @Put()
  upsert(
    @Param('courseId') courseId: string,
    @Body() dto: UpsertCourseOverviewDto
  ) {
    return this.service.upsert(BigInt(courseId), dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(BigInt(id))
  }
}