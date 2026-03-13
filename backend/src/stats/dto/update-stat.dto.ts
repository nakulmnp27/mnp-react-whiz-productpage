import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional, MaxLength } from 'class-validator'

export class UpdateStatDto {

  @ApiProperty({
    example: 'quiz.png',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  icon?: string

  @ApiProperty({
    example: 'Practise Test',
    required: false
  })
  @IsString()
  @IsOptional()
  label?: string

  @ApiProperty({
    example: '10 Quizzes',
    required: false
  })
  @IsString()
  @IsOptional()
  value?: string
}