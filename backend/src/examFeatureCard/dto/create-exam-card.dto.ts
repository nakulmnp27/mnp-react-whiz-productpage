import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateExamFeatureCardDto {

  @ApiProperty({ example: 'robot.png' })
  @IsString()
  @IsNotEmpty()
  icon: string

  @ApiProperty({ example: 'Make use of AWS Cloud technologies' })
  @IsString()
  @IsNotEmpty()
  text: string
}