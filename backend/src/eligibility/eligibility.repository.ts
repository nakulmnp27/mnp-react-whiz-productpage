import { PrismaService } from '../prisma/prisma.service'
import { Course,EligibilityPoint } from '@prisma/client'
import { Injectable } from '@nestjs/common'


export interface EligibilityRepository {
  findByCourse(courseId: bigint): Promise<EligibilityPoint[]>
  create(courseId: bigint, text: string): Promise<EligibilityPoint>
  update(id: bigint, text: string): Promise<EligibilityPoint>
  delete(id: bigint): Promise<EligibilityPoint>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaEligibilityRepository implements EligibilityRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByCourse(courseId: bigint) {
    return this.prisma.eligibilityPoint.findMany({
      where: { courseId },
    })
  }

  create(courseId: bigint, text: string) {
    return this.prisma.eligibilityPoint.create({
      data: { courseId, text },
    })
  }

  update(id: bigint, text: string) {
    return this.prisma.eligibilityPoint.update({
      where: { id },
      data: { text },
    })
  }

  delete(id: bigint) {
    return this.prisma.eligibilityPoint.delete({
      where: { id },
    })
  }
  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}