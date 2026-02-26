import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateStatDto {
  @ApiProperty({ example: '1500+' })
  @IsString()
  @IsOptional()
  value?: string
}