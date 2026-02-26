import { Module } from '@nestjs/common'
import { TestimonialsController } from './testimonial.controller'
import { TestimonialsService } from './testimonial.service'
import { PrismaTestimonialsRepository } from './testimonial.repository'

@Module({
  controllers: [TestimonialsController],
  providers: [
    TestimonialsService,
    PrismaTestimonialsRepository,
  ],
})
export class TestimonialsModule {}