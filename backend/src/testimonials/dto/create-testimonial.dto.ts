import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator'

export class CreateTestimonialDto {
  @ApiProperty({ example: 'Rahul Sharma' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'Software Engineer' })
  @IsString()
  @IsNotEmpty()
  role: string

  @ApiProperty({ example: 'This course helped me a lot.' })
  @IsString()
  @IsNotEmpty()
  message: string

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number
}