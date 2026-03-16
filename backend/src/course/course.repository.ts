import { PrismaService } from '../prisma/prisma.service'
import { Course } from '@prisma/client'
import { Injectable } from '@nestjs/common'

export interface CourseRepository {
  create(data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<Course>
  findAll(): Promise<Course[]>
  findById(id: number): Promise<Course | null>
  update(id: number, data: Partial<Course>): Promise<Course>
  delete(id: number): Promise<Course>
  findFullById(courseId: bigint): Promise<Course | null>
  findByTitle(title:string) : Promise<Course | null>
}

@Injectable()
export class PrismaCourseRepository implements CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) {
  return this.prisma.course.create({ data })
  }

findAll(){
  return this.prisma.course.findMany({
    where: {
      isDeleted: false
    }
  })
}

  findById(id: number){
    return this.prisma.course.findFirst({
      where: { id: BigInt(id), isDeleted: false }
    })
  }

update(id: number, data: Partial<Course>){
return this.prisma.course.update({
      where: { id:BigInt(id), isDeleted: false },
      data,
    })
  }

delete(id: number){
  return this.prisma.course.update({
    where: { id: BigInt(id) },
    data: {
      isDeleted: true
    }
  })
}

async findFullById(courseId: bigint){
  return this.prisma.course.findFirst({
    where: { id: courseId, isDeleted: false },
    include: {
      pricing: {
        where: { isDeleted: false }
      },
      features: {
        where: { isDeleted: false }
      },
      stats: {
        where: { isDeleted: false }
      },
      faqs: {
        where: { isDeleted: false }
      },
      testimonials: {
        where: { isDeleted: false }
      },
      examInfo: {
        where: { isDeleted: false }
      },
      // eligibility: {
      //   where: { isDeleted: false }
      // },
      courseOverview: {
        where: { isDeleted: false }
      },
      courseBenefits: {
        where: { isDeleted: false }
      },
      examDetails: {
        where: { isDeleted: false }
      },
      examFeatureCards: {
        where: { isDeleted: false }
      },
    },
  });
}

findByTitle(title: string) {
  return this.prisma.course.findFirst({
    where: { title, isDeleted: false }
  })
}
  
}