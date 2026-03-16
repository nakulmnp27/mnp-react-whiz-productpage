import { PrismaService } from '../prisma/prisma.service'
import { Course, ExamFeatureCard } from '@prisma/client'
import { Injectable } from '@nestjs/common'
export interface ExamFeatureCardRepository {

  findByCourse(courseId: bigint): Promise<ExamFeatureCard[]>

  create( courseId: bigint, icon: string, text: string): Promise<ExamFeatureCard>
  update( id: bigint, icon: string, text: string): Promise<ExamFeatureCard>
  delete(id: bigint): Promise<ExamFeatureCard>
  findCourseById(courseId: bigint): Promise<Course | null>
  findById(id: bigint): Promise<ExamFeatureCard | null>
}

@Injectable()
export class PrismaExamFeatureCardRepository implements ExamFeatureCardRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.examFeatureCard.findMany({
      where: { courseId, isDeleted:false },
    })
  }

  create(courseId: bigint, icon: string, text: string) {
    return this.prisma.examFeatureCard.create({
      data: { courseId, icon, text },
    })
  }
  update(id: bigint, icon: string, text: string) {
    return this.prisma.examFeatureCard.update({
      where: { id },
      data: { icon, text },
    })
  }

  delete(id: bigint) {
    return this.prisma.examFeatureCard.update({
      where: { id},
      data : {isDeleted : true}
    })
  }
  findCourseById(courseId: bigint) {
    return this.prisma.course.findFirst({
      where: { id: courseId , isDeleted:false},
    })
  }
  
  findById(id: bigint) {
  return this.prisma.examFeatureCard.findFirst({
    where: {
      id,
      isDeleted: false
    }
  })
}
}