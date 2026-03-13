import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty,} from 'class-validator'

export class CreateExamInfoDto {

  @ApiProperty({ example: 'certificate.png' })
  @IsString()
  @IsNotEmpty()
  icon: string

  @ApiProperty({ example: 'Prior Certification' })
  @IsString()
  @IsNotEmpty()
  heading: string

  @ApiProperty({ example: 'Not Required' })
  @IsString()
  @IsNotEmpty()
  text: string
}