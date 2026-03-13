import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateFaqDto {
  @ApiProperty({ example: 'What is the significance of Amazon Elastic Compute Cloud EC2 in AWS foundational Cloud Practitioner certification?' })
  @IsString()
  @IsNotEmpty()
  question: string

  @ApiProperty({ example: 'Amazon Elastic Compute Cloud is a web service that gives a secure and resizable compute capacity in the cloud. Amazon EC2 is intended to make web-scale processing simpler for engineers. It enables users to use web service interfaces to Launch instances with different operating systems Load instances with the custom applications Manage the permissions for network access Run the image with systems as per requirement' })
  @IsString()
  @IsNotEmpty()
  answer: string
}