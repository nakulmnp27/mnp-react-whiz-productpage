import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import * as bcrypt from 'bcrypt'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined')
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString })
} as any)

async function main() {
  const email = 'mnp@admin.com'
  const password = '12345678'

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: 'Admin',
      email,
      password: hashedPassword,
      role: 'admin',
      isDeleted: false
    }
  })

console.log("seeding finish")
}

main()
  .catch((err) => {
    console.error('Seeding failed')
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
