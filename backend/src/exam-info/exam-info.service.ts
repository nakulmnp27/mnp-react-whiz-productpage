import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaExamInfoRepository } from './exam-info.repository'
import { UpsertExamInfoDto } from './dto/upsert-exam-info.dto'

@Injectable()
export class ExamInfoService {
  constructor(private readonly repo: PrismaExamInfoRepository) {}

  get(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    return this.repo.findByCourse(BigInt(courseId))
  }

  async upsert(courseId: number, dto: UpsertExamInfoDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

        const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
    throw new NotFoundException('course not found')
    }

    return this.repo.upsert(
      BigInt(courseId),
      dto.format,
      dto.duration,
      dto.cost,
      dto.language,
    )
  }

  async remove(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    const existing = await this.repo.findByCourse(BigInt(courseId))
    if (!existing) {
      throw new NotFoundException('exam info not found')
    }

    return this.repo.deleteByCourse(BigInt(courseId))
  }
}