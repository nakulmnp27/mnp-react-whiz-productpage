import { PrismaService } from '../prisma/prisma.service'
import { Course } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface CourseRepository {
  create(data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<Course>
  findAll(): Promise<Course[]>
  findById(id: number): Promise<Course | null>
  update(id: number, data: Partial<Course>): Promise<Course>
  delete(id: number): Promise<Course>
}

@Injectable()
export class PrismaCourseRepository implements CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) {
  return this.prisma.course.create({ data })
  }

  findAll() {
    return this.prisma.course.findMany()
  }

  findById(id: number) {
    return this.prisma.course.findUnique({
      where: { id },
    })
  }

update(id: number, data: Partial<Course>) {
return this.prisma.course.update({
      where: { id },
      data,
    })
  }

delete(id: number) {
    return this.prisma.course.delete({
      where: { id },
    })
  }
  
}