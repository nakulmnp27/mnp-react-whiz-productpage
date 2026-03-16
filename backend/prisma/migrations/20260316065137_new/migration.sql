/*
  Warnings:

  - You are about to drop the `EligibilityPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EligibilityPoint" DROP CONSTRAINT "EligibilityPoint_courseId_fkey";

-- DropTable
DROP TABLE "EligibilityPoint";
