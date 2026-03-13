import { PrismaService } from '../prisma/prisma.service'
import { Course , Faq } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface FaqsRepository {
  findByCourse(courseId: bigint): Promise<Faq[]>
  create(courseId: bigint, question: string, answer: string): Promise<Faq>
  update(id: bigint, answer: string): Promise<Faq>
  delete(id: bigint): Promise<Faq>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaFaqsRepository implements FaqsRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.faq.findMany({
      where: { courseId },
    })
  }

  create(courseId: bigint, question: string, answer: string) {
    return this.prisma.faq.create({
      data: {
        courseId,
        question,
        answer,
      },
    })
  }
  update(id: bigint, answer: string) {
    return this.prisma.faq.update({
      where: { id },
      data: { answer },
    })
  }
  delete(id: bigint) {
    return this.prisma.faq.delete({
      where: { id },
    })
  }

  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}