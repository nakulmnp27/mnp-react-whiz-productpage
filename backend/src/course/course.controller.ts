  import {Controller,Get,Post,Patch, Delete, Param, Body, ParseIntPipe, UseGuards} from '@nestjs/common'
  import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
  import { CourseService } from './course.service'
  import { CreateCourseDto } from './dto/create-course.dto'
  import { UpdateCourseDto } from './dto/update-course.dto'
import { JwtAuthGuard } from '../auth/jwt.guard'


  @ApiTags('Courses')
  @Controller('courses')
  export class CourseController {
    constructor(private readonly service: CourseService) {}

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiOperation({ summary: 'Create course' })
    create(@Body() dto: CreateCourseDto) {
      return this.service.create(dto)
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Get all courses' })
    findAll() {
      return this.service.findAll()
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Get course by id' })
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.service.findOne(id)
    }
  
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update course' })
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: UpdateCourseDto,
  ) {
      return this.service.update(id, dto)
    }

    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
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