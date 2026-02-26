import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateFaqDto {
  @ApiProperty({ example: 'Updated answer' })
  @IsString()
  @IsOptional()
  answer?: string
}