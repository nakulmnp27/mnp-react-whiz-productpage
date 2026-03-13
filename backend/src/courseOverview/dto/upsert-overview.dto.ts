import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator'

export class UpsertCourseOverviewDto {

  @IsOptional()
  @IsInt()
  id?: number

  @ApiProperty({example:"This AWS Certified Cloud Practitioner course is developed for candidates who have basic knowledge of AWS Cloud concepts and are planning to appear in the beginner-level AWS Certified Cloud Practitioner Exam.", 
    maxLength: 500
  })
  @IsString()
  @MaxLength(500)
  text: string

  @ApiProperty({
    example: 1,
  })
  @IsInt()
  column: number
}