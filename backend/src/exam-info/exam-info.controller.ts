import {Controller, Get,
  Put, Post,
  Delete, Param, Body,
  ParseIntPipe, } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ExamInfoService } from './exam-info.service'
import { CreateExamInfoDto } from './dto/create-exam-info.dto'
import { UpdateExamInfoDto } from './dto/update-exam.dto'

@ApiTags('Course Exam Info')
@Controller()
export class ExamInfoController {
  constructor(private readonly service: ExamInfoService) {}

  @Get('courses/:courseId/exam-info')
  get(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.get(courseId)
  }

  @Post('courses/:courseId/exam-info')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateExamInfoDto,
  ) {
    return this.service.create(courseId, dto)
  }

    @Put('courses/:courseId/exam-info')
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: UpdateExamInfoDto,
  ) {
    return this.service.update(courseId, dto)
  }

  @Delete('courses/:courseId/exam-info')
  remove(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.remove(courseId)
  }
}