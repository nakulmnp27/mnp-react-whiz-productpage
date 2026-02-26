import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateFeatureDto {
  @ApiProperty({ example: 'Live doubt clearing sessions' })
  @IsString()
  @IsNotEmpty()
  text: string
}