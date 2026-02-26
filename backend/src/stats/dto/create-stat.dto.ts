import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateStatDto {
  @ApiProperty({ example: 'Students Enrolled' })
  @IsString()
  @IsNotEmpty()
  label: string

  @ApiProperty({ example: '1200+' })
  @IsString()
  @IsNotEmpty()
  value: string
}