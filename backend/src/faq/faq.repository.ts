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
      where: { courseId, isDeleted:false },
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
      where: { id , isDeleted:false},
      data: { answer },
    })
  }
  delete(id: bigint) {
    return this.prisma.faq.update({
      where: { id },
      data : {isDeleted : true}
    })
  }

findCourseById(courseId: bigint) {
  return this.prisma.course.findFirst({
    where: { id: courseId , isDeleted:false},
  })
}
}