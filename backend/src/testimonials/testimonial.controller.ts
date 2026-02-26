import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Patch,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TestimonialsService } from './testimonial.service'
import { CreateTestimonialDto } from './dto/create-testimonial.dto'
import { UpdateTestimonialDto } from './dto/update-testimonial.dto'

@ApiTags('Course Testimonials')
@Controller()
export class TestimonialsController {
  constructor(private readonly service: TestimonialsService) {}

  @Get('courses/:courseId/testimonials')
  getByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post('courses/:courseId/testimonials')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateTestimonialDto,
  ) {
    return this.service.create(courseId, dto)
  }

  @Patch('testimonials/:testimonialId')
  update(
    @Param('testimonialId', ParseIntPipe) testimonialId: number,
    @Body() dto: UpdateTestimonialDto,
  ) {
    return this.service.update(testimonialId, dto)
  }

  @Delete('testimonials/:testimonialId')
  remove(
    @Param('testimonialId', ParseIntPipe) testimonialId: number,
  ) {
    return this.service.remove(testimonialId)
  }
}