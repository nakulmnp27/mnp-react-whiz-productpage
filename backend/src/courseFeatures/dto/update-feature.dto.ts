import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateFeatureDto {
  @ApiProperty({ example: 'Updated feature text' })
  @IsString()
  @IsOptional()
  text?: string
}