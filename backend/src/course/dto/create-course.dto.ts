import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator'

export class CreateCourseDto {
  @ApiProperty({ example: 'AWS Certified Cloud Practitioner (CLF-C02)' })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({ example: 'This AWS Certified Cloud Practitioner course is developed for candidates who have basic knowledge of AWS Cloud concepts and are planning to appear in the beginner-level AWS Certified Cloud Practitioner Exam. Best-in-class video course with 9+ hrs video courses and 4 full-length practice exams, which include 300+ AWS cloud practitioner practice exam questions & 50+ AWS hands-on labs to help you clear the AWS Certified Cloud Practitioner exam (CLF-C02) on the first attempt. Earn your AWS CCP Certification today to demonstrate and validate your knowledge of the overall understanding of the AWS Cloud Platform, irrespective of your role. By the end of this AWS CLF-C02 course, you will be learning about Cloud services, Security, Compliance, cloud technology services, Billing, Pricing & support mechanisms in AWS.' })
  @IsString()
  @IsNotEmpty()
  description: string

  @ApiProperty({
    example: 'This AWS Cloud Practitioner Certification is an opportunity to get recognized for your hard-earned AWS skills and also for those who would like to upgrade their knowledge on AWS platforms. By learning the exam objectives for the AWS CCP exam, you will be placed in a remarkable position in the journey of your AWS career. To clear the AWS Certified Cloud Practitioner exam, you can take the Cloud Practitioner Training course offered by the AWS platform. '})
  @IsString()
  benefitsMessage: string

  @ApiProperty({ example: 4.5 })
  @IsNumber()
  @Min(0)
  rating: number

  @ApiProperty({ example: 1200 })
  @IsNumber()
  @Min(0)
  learners: number
}