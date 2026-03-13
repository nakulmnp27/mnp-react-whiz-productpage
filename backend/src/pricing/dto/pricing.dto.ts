
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreatePricingDto {

  @ApiProperty({ example: "full bundle" })
  @IsString()
  title: string
  
  @ApiProperty({
    example: 999.99,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  sellingPrice: number

  @ApiProperty({ example: false })
  @IsBoolean()
  isticked: boolean

  @ApiProperty({
    example: 499.99,
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

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isticked?: boolean
}