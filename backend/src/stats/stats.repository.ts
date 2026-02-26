import { PrismaService } from '../prisma/prisma.service'
import { Course, CourseStat } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface StatsRepository {
  findByCourse(courseId: bigint): Promise<CourseStat[]>
  create(courseId: bigint, label: string, value: string): Promise<CourseStat>
  update(id: bigint, value: string): Promise<CourseStat>
  delete(id: bigint): Promise<CourseStat>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaStatsRepository implements StatsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByCourse(courseId: bigint) {
    return this.prisma.courseStat.findMany({
      where: { courseId },
    })
  }

  create(courseId: bigint, label: string, value: string) {
    return this.prisma.courseStat.create({
      data: { courseId, label, value },
    })
  }

  update(id: bigint, value: string) {
    return this.prisma.courseStat.update({
      where: { id },
      data: { value },
    })
  }

  delete(id: bigint) {
    return this.prisma.courseStat.delete({
      where: { id },
    })
  }

  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}