import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateExamDetailDto {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  heading?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string
}