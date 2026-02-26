import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { HealthModule } from './health/health.module'
import { CourseModule } from './course/course.module'
import { PricingModule } from './pricing/pricing.module'
import { StatsModule } from './stats/stats.module'
import { FeaturesModule } from './courseFeatures/features.module'
import { FaqsModule } from './faq/faq.module'
import { TestimonialsModule } from './testimonials/testimonial.module'
import { EligibilityModule } from './eligibility/eligibility.module'
import { ExamInfoModule } from './exam-info/exam-info.module'

import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),

    PrismaModule,

    HealthModule,
    CourseModule,
    PricingModule,
    FeaturesModule,
    StatsModule,
    FaqsModule,
    TestimonialsModule,
    EligibilityModule,
    ExamInfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}