import { Controller,
  Get, Post, Put,
  Delete,
  Param, Body, ParseIntPipe,} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { FaqsService } from './faq.service'
import { CreateFaqDto } from './dto/create-faq.dto'
import { UpdateFaqDto } from './dto/update-faq.dto'

@ApiTags('Course FAQs')
@Controller()
export class FaqsController {
  constructor(private readonly service: FaqsService) {}
  @Get('courses/:courseId/faqs')
  getByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post('courses/:courseId/faqs')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateFaqDto,
  ) {
    return this.service.create(courseId, dto)
  }
  @Put('faqs/:faqId')
  update(
    @Param('faqId', ParseIntPipe) faqId: number,
    @Body() dto: UpdateFaqDto,
  ) {
    return this.service.update(faqId, dto)
  }

  @Delete('faqs/:faqId')
  remove(@Param('faqId', ParseIntPipe) faqId: number) {
    return this.service.remove(faqId)
  }
}