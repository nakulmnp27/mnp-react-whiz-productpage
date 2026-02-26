import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ExamInfoService } from './exam-info.service'
import { UpsertExamInfoDto } from './dto/upsert-exam-info.dto'

@ApiTags('Course Exam Info')
@Controller()
export class ExamInfoController {
  constructor(private readonly service: ExamInfoService) {}

  @Get('courses/:courseId/exam-info')
  get(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.get(courseId)
  }

  @Put('courses/:courseId/exam-info')
  upsert(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: UpsertExamInfoDto,
  ) {
    return this.service.upsert(courseId, dto)
  }

  @Delete('courses/:courseId/exam-info')
  remove(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.remove(courseId)
  }
}