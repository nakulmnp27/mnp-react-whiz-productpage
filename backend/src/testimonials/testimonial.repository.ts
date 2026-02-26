import { PrismaService } from '../prisma/prisma.service'
import { Course, Testimonial } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface TestimonialsRepository {
  findByCourse(courseId: bigint): Promise<Testimonial[]>
  create(
    courseId: bigint,
    name: string,
    role: string,
    message: string,
    rating: number,
  ): Promise<Testimonial>
  update(
    id: bigint,
    message: string,
    rating: number,
  ): Promise<Testimonial>
  delete(id: bigint): Promise<Testimonial>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaTestimonialsRepository implements TestimonialsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByCourse(courseId: bigint) {
    return this.prisma.testimonial.findMany({
      where: { courseId },
    })
  }

  create(
    courseId: bigint,
    name: string,
    role: string,
    message: string,
    rating: number,
  ) {
    return this.prisma.testimonial.create({
      data: {
        courseId,
        name,
        role,
        message,
        rating,
      },
    })
  }

  update(id: bigint, message: string, rating: number) {
    return this.prisma.testimonial.update({
      where: { id },
      data: { message, rating },
    })
  }

  delete(id: bigint) {
    return this.prisma.testimonial.delete({
      where: { id },
    })
  }
  findCourseById(courseId: bigint) {
  return this.prisma.course.findUnique({
    where: { id: courseId },
  })
}
}