import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { PrismaExamFeatureCardRepository } from './exam-card.repository'
import { CreateExamFeatureCardDto } from './dto/create-exam-card.dto'
import { UpdateExamFeatureCardDto } from './dto/update-exam-card.dto'

@Injectable()
export class ExamFeatureCardService {
  constructor(private readonly repo: PrismaExamFeatureCardRepository) {}

  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    return this.repo.findByCourse(BigInt(courseId))
  }
  async create(courseId: number, dto: CreateExamFeatureCardDto) {

  const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
      throw new NotFoundException('course not found')
    }
    return this.repo.create(
      BigInt(courseId),
      dto.icon.trim(),
      dto.text.trim()
    )
  }
  update(id: number, dto: UpdateExamFeatureCardDto) {
    if (id <= 0) {
      throw new BadRequestException('invalid id')
    }
    try {
      return this.repo.update(
        BigInt(id),
        dto.icon?.trim() ?? '',
        dto.text?.trim() ?? ''
      )
    } 
    catch {
      throw new NotFoundException('exam feature card not found')
    }
  }

  remove(id: number) {

    try {
      return this.repo.delete(BigInt(id))
    } 
  catch {
      throw new NotFoundException('exam feature card not found')
    }
  }
}