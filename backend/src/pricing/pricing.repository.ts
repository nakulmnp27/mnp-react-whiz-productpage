import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Course, Pricing } from '@prisma/client'
import { CreatePricingDto, UpdatePricingDto } from './dto/pricing.dto'

export interface PricingRepository {
  create(courseId: bigint, data: CreatePricingDto): Promise<Pricing>
  findByCourseId(courseId: bigint): Promise<Pricing[]>

  update(id: bigint, data: UpdatePricingDto): Promise<Pricing>
  findCourseById(courseId: bigint): Promise<Course | null>
}

@Injectable()
export class PrismaPricingRepository implements PricingRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(courseId: bigint, data: CreatePricingDto): Promise<Pricing> {
    return this.prisma.pricing.create({
      data: {
        title: data.title,
        sellingPrice: data.sellingPrice,
        offerPrice: data.offerPrice,
        isticked: data.isticked,
        courseId: Number(courseId),
      },
    })
  }

  findByCourseId(courseId: bigint): Promise<Pricing[]> {
    return this.prisma.pricing.findMany({
      where: { courseId: Number(courseId) },
    })
  }

  update(id: bigint, data: UpdatePricingDto): Promise<Pricing> {
    return this.prisma.pricing.update({
      where: { id: Number(id) },
      data: {
        title: data.title,
        sellingPrice: data.sellingPrice,
        offerPrice: data.offerPrice,
        isticked: data.isticked,
      },
    })
  }
  findCourseById(courseId: bigint): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: { id: Number(courseId) },
    })
  }
}