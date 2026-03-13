/*
  Warnings:

  - Added the required column `heading` to the `EligibilityPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EligibilityPoint" ADD COLUMN     "heading" VARCHAR(50) NOT NULL;
