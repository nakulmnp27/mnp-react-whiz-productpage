/*
  Warnings:

  - A unique constraint covering the columns `[courseId,text]` on the table `CourseFeature` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[courseId,text]` on the table `EligibilityPoint` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[courseId,question]` on the table `Faq` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CourseFeature_courseId_text_key" ON "CourseFeature"("courseId", "text");

-- CreateIndex
CREATE UNIQUE INDEX "EligibilityPoint_courseId_text_key" ON "EligibilityPoint"("courseId", "text");

-- CreateIndex
CREATE UNIQUE INDEX "Faq_courseId_question_key" ON "Faq"("courseId", "question");
