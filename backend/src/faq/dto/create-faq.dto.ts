import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateFaqDto {
  @ApiProperty({ example: 'Is this course beginner friendly?' })
  @IsString()
  @IsNotEmpty()
  question: string

  @ApiProperty({ example: 'Yes, no prior experience is required.' })
  @IsString()
  @IsNotEmpty()
  answer: string
}