import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaCourseRepository } from './course.repository'
import { CreateCourseDto } from './dto/create-course.dto'
import { UpdateCourseDto } from './dto/update-course.dto'
@Injectable()
export class CourseService {
  constructor(private readonly repo: PrismaCourseRepository) {}
async create(dto: CreateCourseDto) {
    const existing = await this.repo.findByTitle(dto.title)

  if (existing) {
    throw new ConflictException('Course already exists')
  }
    return this.repo.create({
      ...dto,
      learners: BigInt(dto.learners),
      isDeleted: false
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

  async update(id: number, dto: UpdateCourseDto) {
    const data: any = { ...dto }

  if (dto.learners !== undefined) {
      data.learners = BigInt(dto.learners)
    }

return this.repo.update(id, data)
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



