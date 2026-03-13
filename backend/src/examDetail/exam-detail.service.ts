import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaExamDetailRepository } from './exam-detail.repository'
import { CreateExamDetailDto } from './dto/create-examDetail.dto'
import { UpdateExamDetailDto } from './dto/update-examDetail.dto'

@Injectable()
export class ExamDetailService {
  constructor(private readonly repo: PrismaExamDetailRepository) {}
  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    return this.repo.findByCourse(BigInt(courseId))
  }
  async create(courseId: number, dto: CreateExamDetailDto) {
    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
      throw new NotFoundException('course not found')
    }
    return this.repo.create(
      BigInt(courseId),
      dto.heading.trim(),
      dto.description.trim()
    )
  }

  update(id: number, dto: UpdateExamDetailDto) {

    if (id <= 0) {
      throw new BadRequestException('invalid id')
    }
    try {
      return this.repo.update(
        BigInt(id),
        dto.heading!.trim(),
        dto.description!.trim()
      )
    }
    catch {
      throw new NotFoundException('exam detail not found')
    }
  }

  remove(id: number) {

    try {
      return this.repo.delete(BigInt(id))
    }
    catch {
      throw new NotFoundException('exam detail not found')
    }
  }
}