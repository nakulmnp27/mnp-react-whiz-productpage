import { PrismaService } from '../prisma/prisma.service'
import { Course , ExamInfo } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface ExamInfoRepository {
  findByCourse(courseId: bigint): Promise<ExamInfo | null>
  upsert(
    courseId: bigint,
    format: string,
    duration: string,
    cost: number,
    language: string,
  ): Promise<ExamInfo>
  deleteByCourse(courseId: bigint): Promise<ExamInfo>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaExamInfoRepository implements ExamInfoRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByCourse(courseId: bigint) {
    return this.prisma.examInfo.findUnique({
      where: { courseId },
    })
  }

  upsert(
    courseId: bigint,
    format: string,
    duration: string,
    cost: number,
    language: string,
  ) {
    return this.prisma.examInfo.upsert({
      where: { courseId },
      update: {
        format,
        duration,
        cost,
        language,
      },
      create: {
        courseId,
        format,
        duration,
        cost,
        language,
      },
    })
  }

  deleteByCourse(courseId: bigint) {
    return this.prisma.examInfo.delete({
      where: { courseId },
    })
  }
  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}