import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { PrismaBenefitsRepository } from './course-benefit.repository'
import { CreateBenefitDto } from './dto/create-benefit.dto'
import { UpdateBenefitDto } from './dto/update-benefit.dto'

@Injectable()
export class CourseBenefitsService {
  constructor(private readonly repo: PrismaBenefitsRepository) {}
  getByCourse(courseId: number) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    return this.repo.findByCourse(BigInt(courseId))
  }

  async create(courseId: number, dto: CreateBenefitDto) {
    if (courseId <= 0) {
      throw new BadRequestException('invalid course id')
    }
    const course = await this.repo.findCourseById(BigInt(courseId))
    if (!course) {
      throw new NotFoundException('course not found')
    }
    try {
      return this.repo.create(
        BigInt(courseId),
        dto.title.trim(),
        dto.description.trim()
      )
    }
    
    catch {
      throw new BadRequestException('benefit already exists')
    }
  }

  update(benefitId: number, dto: UpdateBenefitDto) {
    if (benefitId <= 0) {
      throw new BadRequestException('invalid benefit id')
    }

    try {
      return this.repo.update(
        BigInt(benefitId),
        dto.title?.trim(),
        dto.description?.trim()
      )
    } 
    
    catch (error: any) {
    if (error.code === 'P2002') {
      throw new BadRequestException('benefit title already exists')
    }

    if (error.code === 'P2025') {
      throw new NotFoundException('benefit not found')
    }

    throw error
  }
  }

  remove(benefitId: number) {
    if (benefitId <= 0) {
      throw new BadRequestException('invalid benefit id')
    }
    try {
      return this.repo.delete(BigInt(benefitId))
    }
    catch{
      throw new NotFoundException('benefit not found')
    }
  }
}