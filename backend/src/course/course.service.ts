import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaCourseRepository } from './course.repository'
import { CreateCourseDto } from './dto/create-course.dto'
import { UpdateCourseDto } from './dto/update-course.dto'
@Injectable()
export class CourseService {
  constructor(private readonly repo: PrismaCourseRepository) {}

  create(dto: CreateCourseDto) {
    return this.repo.create({
      ...dto,
      learners: BigInt(dto.learners),
    })
  }

  findAll() {
    return this.repo.findAll()
  }

  async findOne(id: number) {
const course = await this.repo.findById(id)
    if (!course) {
      throw new NotFoundException('Course not found')
    }
    return course
  }

  update(id: number, dto: UpdateCourseDto) {
    return this.repo.update(id, {
      ...dto,
      learners:
    dto.learners !== undefined? BigInt(dto.learners) : undefined,
    })
  }

  remove(id: number) {
    return this.repo.delete(id)
  }

  async getFullCourse(courseId: bigint) {
    const course = await this.repo.findFullById(courseId);
  
    if (!course) {
      throw new NotFoundException("Course not found");
    }
  
    return course;
  }
}



