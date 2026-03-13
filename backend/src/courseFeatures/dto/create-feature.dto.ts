import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, MaxLength } from 'class-validator'

export class CreateFeatureDto {

  @ApiProperty({
    example: 'unlock.png',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  icon: string

  @ApiProperty({
    example: 'Unlimited Access',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string

  @ApiProperty({
    example: 'You purchase once and can access the course for two years.',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description: string
}