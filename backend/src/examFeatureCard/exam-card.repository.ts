import { PrismaService } from '../prisma/prisma.service'
import { Course, ExamFeatureCard } from '@prisma/client'
import { Injectable } from '@nestjs/common'
export interface ExamFeatureCardRepository {

  findByCourse(courseId: bigint): Promise<ExamFeatureCard[]>

  create( courseId: bigint, icon: string, text: string): Promise<ExamFeatureCard>
  update( id: bigint, icon: string, text: string): Promise<ExamFeatureCard>
  delete(id: bigint): Promise<ExamFeatureCard>
  findCourseById(courseId: bigint): Promise<Course | null>
}

@Injectable()
export class PrismaExamFeatureCardRepository implements ExamFeatureCardRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.examFeatureCard.findMany({
      where: { courseId },
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
    return this.prisma.examFeatureCard.delete({
      where: { id },
    })
  }
  findCourseById(courseId: bigint) {
    return this.prisma.course.findUnique({
      where: { id: courseId },
    })
  }
}