import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator'

export class CreateCourseDto {
  @ApiProperty({ example: 'Full Stack Development' })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({ example: 'Learn frontend and backend from scratch' })
  @IsString()
  @IsNotEmpty()
  description: string

  @ApiProperty({ example: 4.5 })
  @IsNumber()
  @Min(0)
  rating: number

  @ApiProperty({ example: 1200 })
  @IsNumber()
  @Min(0)
  learners: number
}