import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Course , CourseFeature } from '@prisma/client'

export interface FeaturesRepository {
  findByCourse(courseId: bigint): Promise<CourseFeature[]>
  create(courseId: bigint, text: string): Promise<CourseFeature>
  update(id: bigint, text: string): Promise<CourseFeature>
  delete(id: bigint): Promise<CourseFeature>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaFeaturesRepository implements FeaturesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByCourse(courseId: bigint) {
    return this.prisma.courseFeature.findMany({
      where: { courseId },
    })
  }

  create(courseId: bigint, text: string) {
    return this.prisma.courseFeature.create({
      data: { courseId, text },
    })
  }

  update(id: bigint, text: string) {
    return this.prisma.courseFeature.update({
      where: { id },
      data: { text },
    })
  }

  delete(id: bigint) {
    return this.prisma.courseFeature.delete({
      where: { id },
    })
  }

  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}