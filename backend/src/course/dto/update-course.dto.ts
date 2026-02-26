import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional, IsNumber, Min } from 'class-validator'

export class UpdateCourseDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  rating?: number

  @ApiProperty({ required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  learners?: number
}