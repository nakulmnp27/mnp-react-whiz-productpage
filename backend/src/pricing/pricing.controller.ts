import { Controller, Post, Body, Param, Get, Put, ParseIntPipe } from '@nestjs/common'
import { ApiParam, ApiTags } from '@nestjs/swagger'
import { PricingService } from './pricing.service'
import { CreatePricingDto, UpdatePricingDto } from './dto/pricing.dto'

@ApiTags('Pricing')
@ApiParam({
  name: 'courseId',
  required: true,
  description: 'Course ID',
  example: 1,
})


@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Post(':courseId')
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreatePricingDto,
  ) {
    return this.pricingService.create(courseId, dto)
  }

  @Get(':courseId')
  getByCourse(
    @Param('courseId', ParseIntPipe) courseId: number,
  ) {
    return this.pricingService.getByCourse(courseId)
  }

  @Put(':pricingId')
  update(
    @Param('pricingId', ParseIntPipe) pricingId: number,
    @Body() dto: UpdatePricingDto,
  ) {
    return this.pricingService.update(pricingId, dto)
  }
}


