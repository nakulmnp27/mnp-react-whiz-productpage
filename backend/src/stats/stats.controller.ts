import {
  Controller, Get, Post,
  Put, Delete, Param, Body,
  ParseIntPipe,} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { StatsService } from './stats.service'
import { CreateStatDto } from './dto/create-stat.dto'
import { UpdateStatDto } from './dto/update-stat.dto'

@ApiTags('Course Stats')
@Controller()
export class StatsController {
  constructor(private readonly service: StatsService) {}
  @Get('courses/:courseId/stats')
  getByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post('courses/:courseId/stats')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateStatDto,
  ) {
    return this.service.create(courseId, dto)
  }

  @Put('stats/:statId')
  update(
    @Param('statId', ParseIntPipe) statId: number,
    @Body() dto: UpdateStatDto,
  ) {
    return this.service.update(statId, dto)
  }
  @Delete('stats/:statId')
  remove(@Param('statId', ParseIntPipe) statId: number) {
    return this.service.remove(statId)
  }
}