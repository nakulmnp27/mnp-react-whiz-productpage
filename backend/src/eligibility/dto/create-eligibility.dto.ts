import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateEligibilityDto {

  @ApiProperty({ example: 'Recomended Experience' })
  @IsString()
  @IsNotEmpty()
  heading: string

  @ApiProperty({ example: 'This exam is designed for candidates new to Cloud who may not have an information technology (IT) background. This exam is for line-of-business roles like sales, marketing, product or project management, to get a foundational understanding of AWS Cloud. Candidates for this exam could have up to 6 months of exposure to AWS Cloud, but this is not required.' })
  @IsString()
  @IsNotEmpty()
  text: string
}