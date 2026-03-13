import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, Min, Max, IsOptional } from 'class-validator'

export class CreateTestimonialDto {
  @ApiProperty({ example: 'its_mnp' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'Senior Software Architect' })
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

  @ApiProperty ({example: "default.png"})
  @IsString()
  @IsOptional()
  profile:string
}