import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateExamFeatureCardDto {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  icon?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  text?: string
}