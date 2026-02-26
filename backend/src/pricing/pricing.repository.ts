import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Course, Pricing } from '@prisma/client'

export interface PricingRepository {
  create(
    courseId: bigint,
    data: Omit<Pricing, 'id' | 'courseId' | 'createdAt' | 'updatedAt'>
  ): Promise<Pricing>

  findByCourseId(courseId: bigint): Promise<Pricing | null>

  updateByCourseId(
    courseId: bigint,
    data: Partial<Omit<Pricing, 'id' | 'courseId' | 'createdAt' | 'updatedAt'>>
  ): Promise<Pricing>
    findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaPricingRepository implements PricingRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(
  courseId: bigint,
  data: Omit<Pricing, 'id' | 'courseId' | 'createdAt' | 'updatedAt'>
  ): Promise<Pricing> {
  return this.prisma.pricing.create({
      data: {
        ...data,
        courseId: Number(courseId),
      },
    })
  }

findByCourseId(courseId: bigint): Promise<Pricing | null> {
  return this.prisma.pricing.findUnique({
      where: { courseId: Number(courseId) },
    })
  }

  updateByCourseId(
    courseId: bigint,
    data: Partial<Omit<Pricing, 'id' | 'courseId' | 'createdAt' | 'updatedAt'>>
  ): Promise<Pricing> {
    return this.prisma.pricing.update({
      where: { courseId: Number(courseId) },
      data,
    })
  }
  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}