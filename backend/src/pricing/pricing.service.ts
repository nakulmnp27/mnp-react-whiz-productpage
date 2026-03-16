import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaPricingRepository } from './pricing.repository'
import { CreatePricingDto, UpdatePricingDto } from './dto/pricing.dto'

@Injectable()
export class PricingService {
  constructor(private readonly repo: PrismaPricingRepository) {}

  async create(courseId: number, data: CreatePricingDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    if (data.sellingPrice == null || data.offerPrice == null) {
      throw new BadRequestException('pricing values are required')
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

  update(pricingId: number, data: UpdatePricingDto) {
    if (pricingId <= 0) {
      throw new BadRequestException('invalid pricing id')
    }
    return this.repo.update(BigInt(pricingId), data)
  }

  async remove(id: number) {
    if (id <= 0) {
      throw new BadRequestException('invalid pricing id')
    }
    try {
      return await this.repo.delete(BigInt(id))
    } catch {
      throw new NotFoundException('pricing not found')
    }
  }
}