import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateEligibilityDto {
  @ApiProperty({ example: 'Basic knowledge of programming' })
  @IsString()
  @IsNotEmpty()
  text: string
}