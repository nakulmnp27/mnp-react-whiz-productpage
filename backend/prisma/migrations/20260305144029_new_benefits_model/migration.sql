/*
  Warnings:

  - Added the required column `benefitsMessage` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "benefitsMessage" VARCHAR(500) NOT NULL;

-- CreateTable
CREATE TABLE "CourseBenefit" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" BIGINT NOT NULL,

    CONSTRAINT "CourseBenefit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseBenefit_courseId_title_key" ON "CourseBenefit"("courseId", "title");

-- AddForeignKey
ALTER TABLE "CourseBenefit" ADD CONSTRAINT "CourseBenefit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
