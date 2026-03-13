import {Controller,Get,Post,Patch, Delete, Param, Body, ParseIntPipe} from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CourseService } from './course.service'
import { CreateCourseDto } from './dto/create-course.dto'
import { UpdateCourseDto } from './dto/update-course.dto'

@ApiTags('Courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Post()
  @ApiOperation({ summary: 'Create course' })
  create(@Body() dto: CreateCourseDto) {
    return this.service.create(dto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all courses' })
  findAll() {
    return this.service.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get course by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id)
  }

@Patch(':id')
@ApiOperation({ summary: 'Update course' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCourseDto,
) {
    return this.service.update(id, dto)
  }

  @Delete(':id')
@ApiOperation({ summary: 'Delete course' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id) }


@Get(':id/full')
@ApiOperation({ summary: 'Get full course details' })
getFullCourse(@Param('id', ParseIntPipe) id: number) {
  return this.service.getFullCourse(BigInt(id))
}
}