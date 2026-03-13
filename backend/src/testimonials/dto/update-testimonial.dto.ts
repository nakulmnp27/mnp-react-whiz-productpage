import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator'

export class UpdateTestimonialDto {
  @ApiProperty({ example: '' })
  @IsString()
  @IsOptional()
  message?: string

  @ApiProperty({ example: 4 })
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating?: number

  @ApiProperty ({example: "This course has more insights to learn ."})
  @IsString()
  @IsOptional()
  profile?:string
}