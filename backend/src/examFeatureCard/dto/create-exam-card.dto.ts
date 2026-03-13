import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateExamFeatureCardDto {

  @ApiProperty({ example: 'robot.png' })
  @IsString()
  @IsNotEmpty()
  icon: string

  @ApiProperty({ example: 'The Amazon Web Services entry-level certification helps you secure job placements in the fast-growing AWS cloud computing industry, you may start learning the AWS CCP course and pass the exam to pursue your dream career.' })
  @IsString()
  @IsNotEmpty()
  text: string
}