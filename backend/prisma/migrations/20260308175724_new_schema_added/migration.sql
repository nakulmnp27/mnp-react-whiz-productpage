/*
  Warnings:

  - You are about to drop the column `cost` on the `ExamInfo` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `ExamInfo` table. All the data in the column will be lost.
  - You are about to drop the column `format` on the `ExamInfo` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `ExamInfo` table. All the data in the column will be lost.
  - Added the required column `heading` to the `ExamInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `ExamInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `ExamInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamInfo" DROP COLUMN "cost",
DROP COLUMN "duration",
DROP COLUMN "format",
DROP COLUMN "language",
ADD COLUMN     "heading" VARCHAR(100) NOT NULL,
ADD COLUMN     "icon" VARCHAR(100) NOT NULL,
ADD COLUMN     "text" VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE "CourseExamDetail" (
    "id" BIGSERIAL NOT NULL,
    "heading" VARCHAR(100) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseExamDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamFeatureCard" (
    "id" BIGSERIAL NOT NULL,
    "icon" VARCHAR(500) NOT NULL,
    "text" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "ExamFeatureCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseExamDetail_courseId_heading_key" ON "CourseExamDetail"("courseId", "heading");

-- CreateIndex
CREATE UNIQUE INDEX "ExamFeatureCard_courseId_text_key" ON "ExamFeatureCard"("courseId", "text");

-- AddForeignKey
ALTER TABLE "CourseExamDetail" ADD CONSTRAINT "CourseExamDetail_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamFeatureCard" ADD CONSTRAINT "ExamFeatureCard_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
