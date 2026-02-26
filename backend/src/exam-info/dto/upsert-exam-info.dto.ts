import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator'

export class UpsertExamInfoDto {
  @ApiProperty({ example: 'Online MCQ' })
  @IsString()
  @IsNotEmpty()
  format: string

  @ApiProperty({ example: '3 Hours' })
  @IsString()
  @IsNotEmpty()
  duration: string

  @ApiProperty({ example: 1200 })
  @IsNumber()
  @Min(0)
  cost: number

  @ApiProperty({ example: 'English' })
  @IsString()
  @IsNotEmpty()
  language: string
}