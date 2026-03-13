import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, MaxLength } from 'class-validator'

export class UpdateBenefitDto {

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  title?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  description?: string
}