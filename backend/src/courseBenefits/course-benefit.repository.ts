import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Course, CourseBenefit } from '@prisma/client'

export interface BenefitsRepository {
  findByCourse(courseId: bigint): Promise<CourseBenefit[]>
  create(
    courseId: bigint,
    title: string,
    description: string
  ): Promise<CourseBenefit>
  update(
    id: bigint,
    title?: string,
    description?: string
  ): Promise<CourseBenefit>
  delete(id: bigint): Promise<CourseBenefit>
  findCourseById(courseId: bigint): Promise<Course | null>
}

@Injectable()
export class PrismaBenefitsRepository implements BenefitsRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.courseBenefit.findMany({
      where: { courseId,isDeleted:false }
    })
  }

  create(courseId: bigint, title: string, description: string) {
    return this.prisma.courseBenefit.create({
      data: {
        courseId, title,
        description
      }
    })
  }
  update(id: bigint, title?: string, description?: string) {
    return this.prisma.courseBenefit.update({
      where: { id , isDeleted:false},
      data: {
        title,
        description
      }
    })
  }

delete(id: bigint) {
    return this.prisma.courseBenefit.update({
      where: { id },
      data: {
        isDeleted: true
      }
    })
  }

  findCourseById(courseId: bigint){
    return this.prisma.course.findFirst({
    where: { id: courseId, isDeleted: false }
    })
  }
}