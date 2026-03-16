-- CreateTable
CREATE TABLE "Course" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "benefitsMessage" VARCHAR NOT NULL,
    "rating" DOUBLE PRECISION,
    "learners" BIGINT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pricing" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "sellingPrice" DOUBLE PRECISION NOT NULL,
    "offerPrice" DOUBLE PRECISION NOT NULL,
    "isticked" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseFeature" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseStat" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR NOT NULL,
    "label" VARCHAR NOT NULL,
    "value" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" BIGSERIAL NOT NULL,
    "question" VARCHAR NOT NULL,
    "answer" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "role" VARCHAR,
    "message" VARCHAR NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "profile" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamInfo" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR NOT NULL,
    "heading" VARCHAR NOT NULL,
    "text" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "ExamInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EligibilityPoint" (
    "id" BIGSERIAL NOT NULL,
    "heading" VARCHAR NOT NULL,
    "text" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "EligibilityPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseOverview" (
    "id" BIGSERIAL NOT NULL,
    "text" VARCHAR NOT NULL,
    "column" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseOverview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseBenefit" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseBenefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseExamDetail" (
    "id" BIGSERIAL NOT NULL,
    "heading" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseExamDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamFeatureCard" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR NOT NULL,
    "text" VARCHAR NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "ExamFeatureCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_key" ON "Course"("title");

-- CreateIndex
CREATE INDEX "Course_title_idx" ON "Course"("title");

-- CreateIndex
CREATE INDEX "Course_createdAt_idx" ON "Course"("createdAt");

-- CreateIndex
CREATE INDEX "Course_isDeleted_idx" ON "Course"("isDeleted");

-- CreateIndex
CREATE INDEX "Pricing_courseId_idx" ON "Pricing"("courseId");

-- CreateIndex
CREATE INDEX "Pricing_isDeleted_idx" ON "Pricing"("isDeleted");

-- CreateIndex
CREATE INDEX "CourseFeature_courseId_idx" ON "CourseFeature"("courseId");

-- CreateIndex
CREATE INDEX "CourseFeature_isDeleted_idx" ON "CourseFeature"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "CourseFeature_courseId_title_key" ON "CourseFeature"("courseId", "title");

-- CreateIndex
CREATE INDEX "CourseStat_courseId_idx" ON "CourseStat"("courseId");

-- CreateIndex
CREATE INDEX "CourseStat_isDeleted_idx" ON "CourseStat"("isDeleted");

-- CreateIndex
CREATE INDEX "Faq_courseId_idx" ON "Faq"("courseId");

-- CreateIndex
CREATE INDEX "Faq_isDeleted_idx" ON "Faq"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "Faq_courseId_question_key" ON "Faq"("courseId", "question");

-- CreateIndex
CREATE INDEX "Testimonial_courseId_idx" ON "Testimonial"("courseId");

-- CreateIndex
CREATE INDEX "Testimonial_isDeleted_idx" ON "Testimonial"("isDeleted");

-- CreateIndex
CREATE INDEX "ExamInfo_courseId_idx" ON "ExamInfo"("courseId");

-- CreateIndex
CREATE INDEX "ExamInfo_isDeleted_idx" ON "ExamInfo"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "ExamInfo_courseId_heading_key" ON "ExamInfo"("courseId", "heading");

-- CreateIndex
CREATE INDEX "EligibilityPoint_courseId_idx" ON "EligibilityPoint"("courseId");

-- CreateIndex
CREATE INDEX "EligibilityPoint_isDeleted_idx" ON "EligibilityPoint"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "EligibilityPoint_courseId_text_key" ON "EligibilityPoint"("courseId", "text");

-- CreateIndex
CREATE INDEX "CourseOverview_courseId_idx" ON "CourseOverview"("courseId");

-- CreateIndex
CREATE INDEX "CourseOverview_isDeleted_idx" ON "CourseOverview"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "CourseOverview_courseId_text_key" ON "CourseOverview"("courseId", "text");

-- CreateIndex
CREATE INDEX "CourseBenefit_courseId_idx" ON "CourseBenefit"("courseId");

-- CreateIndex
CREATE INDEX "CourseBenefit_isDeleted_idx" ON "CourseBenefit"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "CourseBenefit_courseId_title_key" ON "CourseBenefit"("courseId", "title");

-- CreateIndex
CREATE INDEX "CourseExamDetail_courseId_idx" ON "CourseExamDetail"("courseId");

-- CreateIndex
CREATE INDEX "CourseExamDetail_isDeleted_idx" ON "CourseExamDetail"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "CourseExamDetail_courseId_heading_key" ON "CourseExamDetail"("courseId", "heading");

-- CreateIndex
CREATE INDEX "ExamFeatureCard_courseId_idx" ON "ExamFeatureCard"("courseId");

-- CreateIndex
CREATE INDEX "ExamFeatureCard_isDeleted_idx" ON "ExamFeatureCard"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "ExamFeatureCard_courseId_text_key" ON "ExamFeatureCard"("courseId", "text");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseFeature" ADD CONSTRAINT "CourseFeature_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStat" ADD CONSTRAINT "CourseStat_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faq" ADD CONSTRAINT "Faq_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamInfo" ADD CONSTRAINT "ExamInfo_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EligibilityPoint" ADD CONSTRAINT "EligibilityPoint_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOverview" ADD CONSTRAINT "CourseOverview_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseBenefit" ADD CONSTRAINT "CourseBenefit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseExamDetail" ADD CONSTRAINT "CourseExamDetail_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamFeatureCard" ADD CONSTRAINT "ExamFeatureCard_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
