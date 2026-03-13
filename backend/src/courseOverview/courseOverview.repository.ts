import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CourseOverview} from '@prisma/client'

export interface CourseOverviewRepository {
  findByCourse(courseId: bigint): Promise<CourseOverview[]>
  upsert(courseId: bigint, data: { id?: number , text: string , column: number}): Promise<CourseOverview>
  delete(id: bigint): Promise<void>
}

@Injectable()
export class PrismaCourseOverviewRepository implements CourseOverviewRepository {
  constructor(private prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.courseOverview.findMany({
      where: { courseId }
    })
  }

  upsert(courseId: bigint, data: {
    id?: number
    text: string
    column: number
  }) {
    if (data.id) {
      return this.prisma.courseOverview.update({
        where: { id: BigInt(data.id) },
        data: {
          text: data.text,
          column: data.column
        }
      })
    }
    return this.prisma.courseOverview.create({
      data: {
        text: data.text,
        column: data.column,
        courseId
      }
    })
  }

  async delete(id: bigint) {
    await this.prisma.courseOverview.delete({
      where: { id }
    })
  }
}