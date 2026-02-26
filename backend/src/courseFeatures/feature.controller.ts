import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { FeaturesService } from './features.service'
import { CreateFeatureDto } from './dto/create-feature.dto'
import { UpdateFeatureDto } from './dto/update-feature.dto'

@ApiTags('Course Features')
@Controller()
export class FeaturesController {
  constructor(private readonly service: FeaturesService) {}

  @Get('courses/:courseId/features')
  getByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.service.getByCourse(courseId)
  }

  @Post('courses/:courseId/features')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreateFeatureDto,
  ) {
    return this.service.create(courseId, dto)
  }

  @Put('features/:featureId')
  update(
    @Param('featureId', ParseIntPipe) featureId: number,
    @Body() dto: UpdateFeatureDto,
  ) {
    return this.service.update(featureId, dto)
  }

  @Delete('features/:featureId')
  remove(@Param('featureId', ParseIntPipe) featureId: number) {
    return this.service.remove(featureId)
  }
}