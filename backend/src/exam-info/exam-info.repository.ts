import { PrismaService } from '../prisma/prisma.service'
import { Course, ExamInfo } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { fail } from 'assert'

export interface ExamInfoRepository {
  findByCourse(courseId: bigint): Promise<ExamInfo[]>
  create( courseId: bigint, icon: string, heading: string,text: string,): Promise<ExamInfo>
  update(id: bigint, icon: string, heading: string, text: string,): Promise<ExamInfo>
  delete(id: bigint): Promise<ExamInfo>
  findCourseById(courseId: bigint): Promise<Course | null>
  findById(id: bigint): Promise<ExamInfo | null>
}

@Injectable()
export class PrismaExamInfoRepository implements ExamInfoRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.examInfo.findMany({
      where: { courseId , isDeleted:false},
    })
  }
  create(
    courseId: bigint,
    icon: string,
    heading: string,
    text: string,
  ) {
    return this.prisma.examInfo.create({
      data: {
        courseId,
        icon,
        heading,
        text,
      },
    })
  }
  update(
    id: bigint,
    icon: string,
    heading: string,
    text: string,
  ) {
    return this.prisma.examInfo.update({
      where: { id },
      data: {
        icon,
        heading,
        text,
      },
    })
  }

  delete(id: bigint) {
    return this.prisma.examInfo.update({
    where: { id },
      data:{isDeleted:true}
    })
  }

  findCourseById(courseId: bigint) {
    return this.prisma.course.findFirst({
      where: { id: courseId, isDeleted:false },
    })
  }
  findById(id: bigint) {
  return this.prisma.examInfo.findFirst({
    where: { id, isDeleted:false }
  })
}
}