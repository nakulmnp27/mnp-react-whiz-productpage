import { ApiProperty } from '@nestjs/swagger'
import { IsString, MaxLength } from 'class-validator'

export class CreateBenefitDto {

  @ApiProperty({
    example: 'Deep Understanding of AWS Cloud Concepts:'
  })
  @IsString()
  @MaxLength(50)
  title: string

  @ApiProperty({
    example: 'You will be able to understand the benefits of AWS concepts such as High reliability, Elasticity, Scalability, Security, and Availability. You can also identify and control the AWS expenses such as CapEx (Capital Expenses) & OpEX (Operational Expenses) by performing cost-reducing operations.'
  })
  @IsString()
  @MaxLength(200)
  description: string
}