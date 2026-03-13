import {Controller, Get, Post,
  Put, Delete, Param,
  Body,ParseIntPipe, } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { EligibilityService } from './eligibility.service'
import { CreateEligibilityDto } from './dto/create-eligibility.dto'
import { UpdateEligibilityDto } from './dto/update-eligibility.dto'

@ApiTags('Course Eligibility')
@Controller()
export class EligibilityController {
  constructor(private readonly service: EligibilityService) {}

  @Get('courses/:courseId/eligibility')
  getByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post('courses/:courseId/eligibility')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateEligibilityDto,
  ) {
    return this.service.create(courseId, dto)
  }

  @Put('eligibility/:eligibilityId')
  update(
    @Param('eligibilityId', ParseIntPipe) eligibilityId: number,
    @Body() dto: UpdateEligibilityDto,
  ) {
    return this.service.update(eligibilityId, dto)
  }

  @Delete('eligibility/:eligibilityId')
  remove(
    @Param('eligibilityId', ParseIntPipe) eligibilityId: number,
  ) {
    return this.service.remove(eligibilityId)
  }
}