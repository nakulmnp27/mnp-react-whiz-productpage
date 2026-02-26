import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateEligibilityDto {
  @ApiProperty({ example: 'Updated eligibility requirement' })
  @IsString()
  @IsOptional()
  text?: string
}