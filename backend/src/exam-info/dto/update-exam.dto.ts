import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional, MaxLength } from 'class-validator'

export class UpdateExamInfoDto {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  icon?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  heading?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  text?: string
}