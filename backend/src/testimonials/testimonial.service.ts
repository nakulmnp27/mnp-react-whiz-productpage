import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaTestimonialsRepository } from './testimonial.repository'
import { CreateTestimonialDto } from './dto/create-testimonial.dto'
import { UpdateTestimonialDto } from './dto/update-testimonial.dto'

@Injectable()
export class TestimonialsService {
  constructor(private readonly repo: PrismaTestimonialsRepository) {}

  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateTestimonialDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
    throw new NotFoundException('course not found')
    }

    return this.repo.create(
      BigInt(courseId),
      dto.name.trim(),
      dto.role,
      dto.message.trim(),
      dto.rating,
    )
  }

update(testimonialId: number, dto: UpdateTestimonialDto) {
  if (testimonialId <= 0) {
    throw new BadRequestException('invalid testimonial id')
  }

  if (!dto.message || dto.rating == null) {
    throw new BadRequestException('message and rating are required')
  }

  try {
    return this.repo.update(
      BigInt(testimonialId),
      dto.message.trim(),
      dto.rating,
    )
  } catch {
    throw new NotFoundException('testimonial not found')
  }
}

  remove(testimonialId: number) {
    if (testimonialId <= 0) {
      throw new BadRequestException('invalid testimonial id')
    }

    try {
      return this.repo.delete(BigInt(testimonialId))
    } catch {
      throw new NotFoundException('testimonial not found')
    }
  }
}