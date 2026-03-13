import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional, MaxLength } from 'class-validator'

export class UpdateFeatureDto {

  @ApiProperty({
    example: 'unlock.png',
    required: false
  })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  icon?: string

  @ApiProperty({
    example: 'Unlimited Access',
    required: false
  })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  title?: string

  @ApiProperty({
    example: 'You purchase once and can access the course for two years.',
    required: false
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string
}