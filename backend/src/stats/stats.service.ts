import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaStatsRepository } from './stats.repository'
import { CreateStatDto } from './dto/create-stat.dto'
import { UpdateStatDto } from './dto/update-stat.dto'

@Injectable()
export class StatsService {
  constructor(private readonly repo: PrismaStatsRepository) {}

  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateStatDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
    throw new NotFoundException('course not found')
    }

    return this.repo.create(
      BigInt(courseId),
      dto.label.trim(),
      dto.value.trim(),
    )
  }

  update(statId: number, dto: UpdateStatDto) {
    if (statId <= 0) {
      throw new BadRequestException('invalid stat id')
    }

    if (!dto.value?.trim()) {
      throw new BadRequestException('value is required')
    }

    try {
      return this.repo.update(BigInt(statId), dto.value.trim())
    } catch {
      throw new NotFoundException('stat not found')
    }
  }

  remove(statId: number) {
    if (statId <= 0) {
      throw new BadRequestException('invalid stat id')
    }

    try {
      return this.repo.delete(BigInt(statId))
    } catch {
      throw new NotFoundException('stat not found')
    }
  }
}