import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        isDeleted: false
      }
    })

    if (!user) {
      throw new UnauthorizedException('Check You mail')
    }
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
      throw new UnauthorizedException('password wrong bro')
    }
    const payload = {
      sub: user.id.toString(),
      email: user.email
    }
    const accessToken = this.jwtService.sign(payload)
    return { accessToken }
  }
}