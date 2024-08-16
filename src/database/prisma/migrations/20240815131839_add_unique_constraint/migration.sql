/*
  Warnings:

  - A unique constraint covering the columns `[userId,recordId]` on the table `ProcessedProductRecord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProcessedProductRecord_userId_recordId_key" ON "ProcessedProductRecord"("userId", "recordId");
