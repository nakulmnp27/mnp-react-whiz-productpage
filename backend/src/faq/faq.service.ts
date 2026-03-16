import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaFaqsRepository } from './faq.repository'
import { CreateFaqDto } from './dto/create-faq.dto'
import { UpdateFaqDto } from './dto/update-faq.dto'

@Injectable()
export class FaqsService {
  constructor(private readonly repo: PrismaFaqsRepository) {}
  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateFaqDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    if (!dto.question?.trim()) {
      throw new BadRequestException('question is required')
    }
    if (!dto.answer?.trim()) {
      throw new BadRequestException('answer is required')
    }
      const course = await this.repo.findCourseById(BigInt(courseId))
  if (!course) {
    throw new NotFoundException('course not found')
  }
    try {
      return this.repo.create(
        BigInt(courseId),
        dto.question.trim(),
        dto.answer.trim(),
      )
    } 
    catch {
      throw new BadRequestException('faq already exists')
    }
  }

  update(faqId: number, dto: UpdateFaqDto) {
    if (faqId <= 0) {
      throw new BadRequestException('invalid faq id')
    }
    if (!dto.answer?.trim()) {
      throw new BadRequestException('answer is required')
    }

    try {
      return this.repo.update(BigInt(faqId), dto.answer.trim())
    } 
    catch {
      throw new NotFoundException('faq not found')
    }
  }

  remove(faqId: number) {
    if (faqId <= 0) {
      throw new BadRequestException('invalid faq id')
    }


    
    try {
      return this.repo.delete(BigInt(faqId))
    }
    catch {
      throw new NotFoundException('faq not found')
    }
  }
}