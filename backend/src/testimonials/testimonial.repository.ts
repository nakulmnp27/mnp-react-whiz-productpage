import { PrismaService } from '../prisma/prisma.service'
import { Course, Testimonial } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface TestimonialsRepository {
  findByCourse(courseId: bigint): Promise<Testimonial[]>
  create( courseId: bigint, name: string, role: string,
    message: string, rating: number, profile:string,
  ): Promise<Testimonial>
  update( id: bigint, message?: string, rating?: number, profile?: string,): Promise<Testimonial>
  delete(id: bigint): Promise<Testimonial>
  findCourseById(courseId: bigint):Promise<Course | null>
}

@Injectable()
export class PrismaTestimonialsRepository implements TestimonialsRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCourse(courseId: bigint) {
    return this.prisma.testimonial.findMany({
      where: { courseId, isDeleted:false },
    })
  }

  create(
    courseId: bigint,
    name: string,
    role: string,
    message: string,
    rating: number,
    profile:string,
  ) {
    return this.prisma.testimonial.create({
      data: {
        courseId,
        name,
        role,
        message,
        rating,
        profile,
      },
    })
  }

  update(id: bigint, message?: string, rating?: number, profile?: string) {
    return this.prisma.testimonial.update({
      where: { id , isDeleted:false},
      data: { message, rating, profile },
    })
  }

  delete(id: bigint) {
    return this.prisma.testimonial.update({
      where: { id },
      data: {isDeleted: true}
    })
  }
  findCourseById(courseId: bigint) {
  return this.prisma.course.findFirst({
    where: { id: courseId, isDeleted:false },
  })
}
}