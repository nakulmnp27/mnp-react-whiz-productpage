import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaFeaturesRepository } from './features.repository'
import { CreateFeatureDto } from './dto/create-feature.dto'
import { UpdateFeatureDto } from './dto/update-feature.dto'

@Injectable()
export class FeaturesService {
  constructor(private readonly repo: PrismaFeaturesRepository) {}

  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateFeatureDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    if (!dto.title?.trim()) {
      throw new BadRequestException('title is required')
    }
    if (!dto.description?.trim()) {
      throw new BadRequestException('description is required')
    }
    if (!dto.icon?.trim()) {
      throw new BadRequestException('icon is required')
    }
    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
      throw new NotFoundException('course not found')
    }
    try {
      return this.repo.create(
        BigInt(courseId),
        dto.icon.trim(),
        dto.title.trim(),
        dto.description.trim()
      )
    }
    catch {
      throw new BadRequestException('feature already exists')
    }
  }

  update(featureId: number, dto: UpdateFeatureDto) {
    if (featureId <= 0) {
      throw new BadRequestException('invalid feature id')
    }

    try {
      return this.repo.update(
        BigInt(featureId),
        dto.icon?.trim(),
        dto.title?.trim(),
        dto.description?.trim()
      )
    }
    catch {
      throw new NotFoundException('feature not found')
    }
  }

  remove(featureId: number) {
    if (featureId <= 0) {
      throw new BadRequestException('invalid feature id')
    }
    try {
      return this.repo.delete(BigInt(featureId))
    }
    catch {
      throw new NotFoundException('feature not found')
    }
  }
}