import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaEligibilityRepository } from './eligibility.repository'
import { CreateEligibilityDto } from './dto/create-eligibility.dto'
import { UpdateEligibilityDto } from './dto/update-eligibility.dto'

@Injectable()
export class EligibilityService {
  constructor(private readonly repo: PrismaEligibilityRepository) {}

  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateEligibilityDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    if (!dto.text?.trim()) {
      throw new BadRequestException('text is required')
    }

    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
    throw new NotFoundException('course not found')
    }

    try {
      return this.repo.create(BigInt(courseId), dto.text.trim())
    } catch {
      throw new BadRequestException('eligibility already exists')
    }
  }

  update(eligibilityId: number, dto: UpdateEligibilityDto) {
    if (eligibilityId <= 0) {
      throw new BadRequestException('invalid eligibility id')
    }

    if (!dto.text?.trim()) {
      throw new BadRequestException('text is required')
    }

    try {
      return this.repo.update(BigInt(eligibilityId), dto.text.trim())
    } catch {
      throw new NotFoundException('eligibility not found')
    }
  }

  remove(eligibilityId: number) {
    if (eligibilityId <= 0) {
      throw new BadRequestException('invalid eligibility id')
    }

    try {
      return this.repo.delete(BigInt(eligibilityId))
    } catch {
      throw new NotFoundException('eligibility not found')
    }
  }
}