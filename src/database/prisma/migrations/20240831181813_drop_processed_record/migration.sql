/*
  Warnings:

  - You are about to drop the `ProcessedProductRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProcessedProductRecord" DROP CONSTRAINT "ProcessedProductRecord_createdById_fkey";

-- DropForeignKey
ALTER TABLE "ProcessedProductRecord" DROP CONSTRAINT "ProcessedProductRecord_recordId_fkey";

-- DropForeignKey
ALTER TABLE "ProcessedProductRecord" DROP CONSTRAINT "ProcessedProductRecord_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "ProcessedProductRecord" DROP CONSTRAINT "ProcessedProductRecord_userId_fkey";

-- DropTable
DROP TABLE "ProcessedProductRecord";
