import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsPositive } from 'class-validator'

export class CreatePricingDto {
  @ApiProperty({
    example: 999.99,
    description: 'Original selling price of the course',
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  sellingPrice: number

  @ApiProperty({
    example: 499.99,
    description: 'Offer price shown to users',
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  offerPrice: number
}

export class UpdatePricingDto {
  @ApiPropertyOptional({ example: 1099.99 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  sellingPrice?: number

  @ApiPropertyOptional({ example: 599.99 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  offerPrice?: number
}