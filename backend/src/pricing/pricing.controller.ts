// import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common'
// import { PricingService } from './pricing.service'
// import { CreatePricingDto, UpdatePricingDto } from './dto/pricing.dto'

// @Controller('courses/:courseId/pricing')
// export class PricingController {
//   constructor(private readonly pricingService: PricingService) {}

//   @Post()
//   create(
//     @Param('courseId') courseId: string,
//     @Body() dto: CreatePricingDto,
//   ) {
//     return this.pricingService.create(BigInt(courseId), dto)
//   }

//   @Get()
//   findOne(@Param('courseId') courseId: string) {
//     return this.pricingService.getByCourse(BigInt(courseId))
//   }

//   @Patch()
//   update(
//     @Param('courseId') courseId: string,
//     @Body() dto: UpdatePricingDto,
//   ) {
//     return this.pricingService.update(BigInt(courseId), dto)
//   }
// }

import { Controller, Post, Body, Param, Get, Patch, ParseIntPipe } from '@nestjs/common'
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
@Controller('courses/:courseId/pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Post()
  create(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: CreatePricingDto,
  ) {
    return this.pricingService.create(courseId, dto)
  }

  @Get()
  getByCourse(
    @Param('courseId', ParseIntPipe) courseId: number,
  ) {
    return this.pricingService.getByCourse(courseId)
  }

  @Patch()
  update(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Body() dto: UpdatePricingDto,
  ) {
    return this.pricingService.update(courseId, dto)
  }
}