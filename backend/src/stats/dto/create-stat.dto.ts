import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, MaxLength } from 'class-validator'

export class CreateStatDto {

  @ApiProperty({example: 'quiz.png'})
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  icon: string

  @ApiProperty({
    example: 'Practise test'
  })
  @IsString()
  @IsNotEmpty()
  label: string

  @ApiProperty({
    example: '18 Quizzes'
  })
  @IsString()
  @IsNotEmpty()
  value: string
}