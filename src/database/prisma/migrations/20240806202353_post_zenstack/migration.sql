/*
  Warnings:

  - You are about to drop the `PriceChangeEventConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductNotificationConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatusChangeEventConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PriceChangeEventType" AS ENUM ('PriceIncrease', 'PriceDecrease');

-- CreateEnum
CREATE TYPE "NotificationEventContentType" AS ENUM ('PriceChange', 'StatusChange');

-- DropForeignKey
ALTER TABLE "PriceChangeEventConfig" DROP CONSTRAINT "PriceChangeEventConfig_createdById_fkey";

-- DropForeignKey
ALTER TABLE "PriceChangeEventConfig" DROP CONSTRAINT "PriceChangeEventConfig_productNotificationConfigId_fkey";

-- DropForeignKey
ALTER TABLE "PriceChangeEventConfig" DROP CONSTRAINT "PriceChangeEventConfig_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "ProductNotificationConfig" DROP CONSTRAINT "ProductNotificationConfig_createdById_fkey";

-- DropForeignKey
ALTER TABLE "ProductNotificationConfig" DROP CONSTRAINT "ProductNotificationConfig_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductNotificationConfig" DROP CONSTRAINT "ProductNotificationConfig_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "ProductNotificationConfig" DROP CONSTRAINT "ProductNotificationConfig_userId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeEventConfig" DROP CONSTRAINT "StatusChangeEventConfig_createdById_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeEventConfig" DROP CONSTRAINT "StatusChangeEventConfig_productNotificationConfigId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeEventConfig" DROP CONSTRAINT "StatusChangeEventConfig_updatedById_fkey";

-- DropTable
DROP TABLE "PriceChangeEventConfig";

-- DropTable
DROP TABLE "ProductNotificationConfig";

-- DropTable
DROP TABLE "StatusChangeEventConfig";

-- DropEnum
DROP TYPE "PriceChangeEventConfigType";

-- CreateTable
CREATE TABLE "NotificationEvent" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "contentType" "NotificationEventContentType" NOT NULL,

    CONSTRAINT "NotificationEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceChangeEventC" (
    "id" UUID NOT NULL,
    "eventTypes" "PriceChangeEventType"[] DEFAULT ARRAY['PriceIncrease', 'PriceDecrease']::"PriceChangeEventType"[],

    CONSTRAINT "PriceChangeEventC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusChangeEvent" (
    "id" UUID NOT NULL,
    "eventTypes" "ProductStatus"[],

    CONSTRAINT "StatusChangeEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotificationEvent" ADD CONSTRAINT "NotificationEvent_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationEvent" ADD CONSTRAINT "NotificationEvent_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationEvent" ADD CONSTRAINT "NotificationEvent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationEvent" ADD CONSTRAINT "NotificationEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeEventC" ADD CONSTRAINT "PriceChangeEventC_id_fkey" FOREIGN KEY ("id") REFERENCES "NotificationEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeEvent" ADD CONSTRAINT "StatusChangeEvent_id_fkey" FOREIGN KEY ("id") REFERENCES "NotificationEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
