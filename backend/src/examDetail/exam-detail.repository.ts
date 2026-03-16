import { PrismaService } from '../prisma/prisma.service'
import { CourseExamDetail, Course } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface ExamDetailRepository {

  findByCourse(courseId: bigint): Promise<CourseExamDetail[]>
  create(courseId: bigint, heading: string,description: string): Promise<CourseExamDetail>
  update( id: bigint, heading: string, description: string ): Promise<CourseExamDetail>
  delete(id: bigint): Promise<CourseExamDetail>
  findCourseById(courseId: bigint): Promise<Course | null>
  findById(id: bigint): Promise<CourseExamDetail | null>
}

@Injectable()
export class PrismaExamDetailRepository implements ExamDetailRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.courseExamDetail.findMany({
      where: { courseId, isDeleted:false }
    })
  }
create(courseId: bigint, heading: string, description: string) {
    return this.prisma.courseExamDetail.create({
      data: { courseId, heading, description }
    })
  }

  update(id: bigint, heading: string, description: string) {
    return this.prisma.courseExamDetail.update({
      where: { id, isDeleted:false },
      data: { heading, description }
    })
  }
  delete(id: bigint) {
    return this.prisma.courseExamDetail.update({
      where: { id },
      data:{isDeleted:true}
    })
  }

  findCourseById(courseId: bigint) {
    return this.prisma.course.findFirst({
      where: { id: courseId, isDeleted:false }
    })
  }
  findById(id: bigint) {
  return this.prisma.courseExamDetail.findFirst({
    where: { id, isDeleted: false }
  })
}
}