/*
  Warnings:

  - A unique constraint covering the columns `[courseId,heading]` on the table `ExamInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ExamInfo_courseId_key";

-- CreateIndex
CREATE UNIQUE INDEX "ExamInfo_courseId_heading_key" ON "ExamInfo"("courseId", "heading");
