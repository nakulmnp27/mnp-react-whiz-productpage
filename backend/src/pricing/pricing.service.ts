import { Injectable, BadRequestException,NotFoundException } from '@nestjs/common'
import { PrismaPricingRepository } from './pricing.repository'

@Injectable()
export class PricingService {
  constructor(private readonly repo: PrismaPricingRepository) {}

  async create(courseId: number, data) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

      const course = await this.repo.findCourseById(BigInt(courseId))
      if (!course) {
        throw new NotFoundException('course not found')
      }

    return this.repo.create(BigInt(courseId), data)
  }

  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    return this.repo.findByCourseId(BigInt(courseId))
  }

  update(courseId: number, data) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }

    if (data.sellingPrice == null || data.offerPrice == null) {
      throw new BadRequestException('pricing values are required')
    }

    return this.repo.updateByCourseId(BigInt(courseId), data)
  }
}