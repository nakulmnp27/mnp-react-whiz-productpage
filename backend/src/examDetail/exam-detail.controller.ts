import {
  Controller, Get,Post,
  Put, Delete, Param,
  Body, ParseIntPipe } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ExamDetailService } from './exam-detail.service'
import { CreateExamDetailDto } from './dto/create-examDetail.dto'
import { UpdateExamDetailDto } from './dto/update-examDetail.dto'

@ApiTags('Exam Details')
@Controller('courses/:courseId/exam-details')
export class ExamDetailController {
  constructor(private readonly service: ExamDetailService) {}
  @Get()
  getAll(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post()
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateExamDetailDto
  ) {
    return this.service.create(courseId, dto)
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateExamDetailDto
  ) {
    return this.service.update(id, dto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id)
  }
}