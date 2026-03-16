import { ApiProperty } from '@nestjs/swagger'
import { IsString, MaxLength } from 'class-validator'

export class CreateBenefitDto {

  @ApiProperty({
    example: 'AWS Career for freshers'
  })
  @IsString()
  @MaxLength(50)
  title: string

  @ApiProperty({
    example: 'The Amazon Web Services entry-level certification helps you secure job placements in the fast-growing AWS cloud computing industry, you may start learning the AWS CCP course and pass the exam to pursue your dream career.'
  })
  @IsString()
  description: string
}