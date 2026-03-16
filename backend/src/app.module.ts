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
import { CourseOverviewModule } from './courseOverview/courseOverview.module'
import { CourseBenefitsModule } from './courseBenefits/course-benefit.module'
import { ExamFeatureCardModule } from './examFeatureCard/exam-card.module'
import { ExamDetailModule } from './examDetail/exam-detail.module'
import { AuthModule } from './auth/auth.module'

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
    CourseOverviewModule,
    CourseBenefitsModule,
    ExamFeatureCardModule,
    ExamDetailModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}