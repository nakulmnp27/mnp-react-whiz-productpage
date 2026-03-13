import {Controller,Get, Post,
  Put, Delete, Param,
  Body, ParseIntPipe
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ExamFeatureCardService } from './exam-card.service'
import { CreateExamFeatureCardDto } from './dto/create-exam-card.dto'
import { UpdateExamFeatureCardDto } from './dto/update-exam-card.dto'

@ApiTags('Exam Feature Cards')
@Controller('courses/:courseId/exam-feature-cards')
export class ExamFeatureCardController {
  constructor(private readonly service: ExamFeatureCardService) {}
  @Get()
  getAll(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post()
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateExamFeatureCardDto
  ) {
    return this.service.create(courseId, dto)
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateExamFeatureCardDto
  ) {
    return this.service.update(id, dto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id)
  }
}