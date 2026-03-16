import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaExamInfoRepository } from './exam-info.repository'
import { CreateExamInfoDto } from './dto/create-exam-info.dto'
import { UpdateExamInfoDto } from './dto/update-exam.dto'

@Injectable()
export class ExamInfoService {
  constructor(private readonly repo: PrismaExamInfoRepository) {}

  get(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateExamInfoDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
      throw new NotFoundException('course not found')
    }

    return this.repo.create(
      BigInt(courseId),
      dto.icon.trim(),
      dto.heading.trim(),
      dto.text.trim(),
    )
  }
async update(id: number, dto: UpdateExamInfoDto) {

  const existing = await this.repo.findById(BigInt(id))
  if (!existing) {
    throw new NotFoundException('exam info not found')
  }
  return this.repo.update(
    BigInt(id),
    dto.icon?.trim() ?? existing.icon,
    dto.heading?.trim() ?? existing.heading,
    dto.text?.trim() ?? existing.text,
  )
}
  async remove(id: number) {
    if (id <= 0) {
      throw new BadRequestException('invalid id')
    }

    const existing = await this.repo.findById(BigInt(id))

    if (!existing) {
      throw new NotFoundException('exam info not found')
    }

    return this.repo.delete(BigInt(id))
  }
}