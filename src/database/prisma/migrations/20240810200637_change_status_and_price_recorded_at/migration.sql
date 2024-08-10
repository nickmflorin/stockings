/*
  Warnings:

  - You are about to drop the column `priceRecordedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `statusRecordedAt` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "priceRecordedAt",
DROP COLUMN "statusRecordedAt",
ADD COLUMN     "priceAsOf" TIMESTAMP(3),
ADD COLUMN     "priceLastUpdatedAt" TIMESTAMP(3),
ADD COLUMN     "statusAsOf" TIMESTAMP(3),
ADD COLUMN     "statusLastUpdatedAt" TIMESTAMP(3);
