import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { CourseBenefitsService } from './course-benefit.service'
import { CreateBenefitDto } from './dto/create-benefit.dto'
import { UpdateBenefitDto } from './dto/update-benefit.dto'

@Controller('courses/:courseId/benefits')
export class CourseBenefitsController {
  constructor(private readonly service: CourseBenefitsService) {}
  @Get()
  getByCourse(@Param('courseId') courseId: string) {
    return this.service.getByCourse(Number(courseId))
  }

  @Post()
  create(
    @Param('courseId') courseId: string,
    @Body() dto: CreateBenefitDto
  ) {
    return this.service.create(Number(courseId), dto)
  }

  @Put(':benefitId')
  update(
    @Param('benefitId') benefitId: string,
    @Body() dto: UpdateBenefitDto
  ) {
    return this.service.update(Number(benefitId), dto)
  }

  @Delete(':benefitId')
  remove(@Param('benefitId') benefitId: string) {
    return this.service.remove(Number(benefitId))
  }
}