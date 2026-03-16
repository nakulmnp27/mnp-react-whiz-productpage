
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreatePricingDto {

  @ApiProperty({ example: "Video Courses" })
  @IsString()
  title: string
  
  @ApiProperty({
    example: 99.99,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  sellingPrice: number

  @ApiProperty({ example: false })
  @IsBoolean()
  isticked: boolean

  @ApiProperty({
    example: 49.99,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  offerPrice: number
}

export class UpdatePricingDto {

  @ApiPropertyOptional({ example: "full bundle" })
  @IsOptional()
  @IsString()
  title?: string

  @ApiPropertyOptional({ example: 150.99 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  sellingPrice?: number

  @ApiPropertyOptional({ example: 99.99 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  offerPrice?: number

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isticked?: boolean
}