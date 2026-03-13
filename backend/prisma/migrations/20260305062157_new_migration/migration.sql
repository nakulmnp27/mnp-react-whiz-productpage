-- CreateTable
CREATE TABLE "Course" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR NOT NULL,
    "rating" DOUBLE PRECISION,
    "learners" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pricing" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "sellingPrice" DOUBLE PRECISION NOT NULL,
    "offerPrice" DOUBLE PRECISION NOT NULL,
    "isticked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseFeature" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR(500) NOT NULL,
    "title" VARCHAR(500) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseStat" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "label" VARCHAR(100) NOT NULL,
    "value" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" BIGSERIAL NOT NULL,
    "question" VARCHAR(500) NOT NULL,
    "answer" VARCHAR(2000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "role" VARCHAR(150),
    "message" VARCHAR(1000) NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamInfo" (
    "id" BIGSERIAL NOT NULL,
    "format" VARCHAR(100) NOT NULL,
    "duration" VARCHAR(100) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "language" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "ExamInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EligibilityPoint" (
    "id" BIGSERIAL NOT NULL,
    "text" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "EligibilityPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseOverview" (
    "id" BIGSERIAL NOT NULL,
    "text" VARCHAR(500) NOT NULL,
    "column" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseOverview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseFeature_courseId_title_key" ON "CourseFeature"("courseId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Faq_courseId_question_key" ON "Faq"("courseId", "question");

-- CreateIndex
CREATE UNIQUE INDEX "ExamInfo_courseId_key" ON "ExamInfo"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "EligibilityPoint_courseId_text_key" ON "EligibilityPoint"("courseId", "text");

-- CreateIndex
CREATE UNIQUE INDEX "CourseOverview_courseId_text_key" ON "CourseOverview"("courseId", "text");

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
