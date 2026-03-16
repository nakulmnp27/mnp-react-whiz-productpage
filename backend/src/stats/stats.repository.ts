import { PrismaService } from '../prisma/prisma.service'
import { Course, CourseStat } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface StatsRepository {
  findByCourse(courseId: bigint): Promise<CourseStat[]>
  create(courseId: bigint,icon: string, label: string, value: string): Promise<CourseStat>
  update(id: bigint, value: string, icon?:string, label?: string): Promise<CourseStat>
  delete(id: bigint): Promise<CourseStat>
  findCourseById(courseId: bigint):Promise<Course | null>
}
@Injectable()
export class PrismaStatsRepository implements StatsRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.courseStat.findMany({
      where: { courseId, isDeleted:false },
    })
  }

  create(courseId: bigint, icon: string, label: string, value: string) {
    return this.prisma.courseStat.create({
      data: { courseId, icon, label, value },
    })
  }
  update(id: bigint, value: string, icon?:string,label?: string) {
    return this.prisma.courseStat.update({
      where: { id, isDeleted:false },
      data: { icon, label, value },
    })
  }

  delete(id: bigint) {
    return this.prisma.courseStat.update({
      where: { id },
      data : { isDeleted:true}
    })
  }

  findCourseById(courseId: bigint) {
  return this.prisma.course.findFirst({
    where: { id: courseId, isDeleted:false },
  })
}
}