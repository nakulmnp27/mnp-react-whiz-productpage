import {Controller, Get,
  Put, Post,
  Delete, Param, Body,
  ParseIntPipe, } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ExamInfoService } from './exam-info.service'
import { CreateExamInfoDto } from './dto/create-exam-info.dto'
import { UpdateExamInfoDto } from './dto/update-exam.dto'

import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { ApiBearerAuth } from '@nestjs/swagger'

@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard) 
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

@Put('exam-info/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateExamInfoDto,
  ) {
    return this.service.update(id, dto)
  }

  @Delete('exam-info/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id)
  }
}