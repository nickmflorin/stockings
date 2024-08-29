/*
  Warnings:

  - You are about to drop the column `productId` on the `PriceChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the column `productRecordId` on the `PriceChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `PriceChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `StatusChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the column `productRecordId` on the `StatusChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `StatusChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the `NewProductNotification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductNotificationType" AS ENUM ('PriceChangeNotification', 'StatusChangeNotification');

-- DropForeignKey
ALTER TABLE "NewProductNotification" DROP CONSTRAINT "NewProductNotification_id_fkey";

-- DropForeignKey
ALTER TABLE "NewProductNotification" DROP CONSTRAINT "NewProductNotification_productId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "PriceChangeNotification" DROP CONSTRAINT "PriceChangeNotification_id_fkey";

-- DropForeignKey
ALTER TABLE "PriceChangeNotification" DROP CONSTRAINT "PriceChangeNotification_productId_fkey";

-- DropForeignKey
ALTER TABLE "PriceChangeNotification" DROP CONSTRAINT "PriceChangeNotification_productRecordId_fkey";

-- DropForeignKey
ALTER TABLE "PriceChangeNotification" DROP CONSTRAINT "PriceChangeNotification_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeNotification" DROP CONSTRAINT "StatusChangeNotification_id_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeNotification" DROP CONSTRAINT "StatusChangeNotification_productId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeNotification" DROP CONSTRAINT "StatusChangeNotification_productRecordId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeNotification" DROP CONSTRAINT "StatusChangeNotification_subscriptionId_fkey";

-- AlterTable
ALTER TABLE "PriceChangeNotification" DROP COLUMN "productId",
DROP COLUMN "productRecordId",
DROP COLUMN "subscriptionId";

-- AlterTable
ALTER TABLE "StatusChangeNotification" DROP COLUMN "productId",
DROP COLUMN "productRecordId",
DROP COLUMN "subscriptionId";

-- DropTable
DROP TABLE "NewProductNotification";

-- DropTable
DROP TABLE "Notification";

-- DropEnum
DROP TYPE "NotificationType";

-- CreateTable
CREATE TABLE "ProductNotification" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "productRecordId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "subscriptionId" UUID NOT NULL,
    "notificationType" "ProductNotificationType" NOT NULL,
    "state" "NotificationState" NOT NULL,
    "stateAsOf" TIMESTAMP(3) NOT NULL,
    "failedAt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),

    CONSTRAINT "ProductNotification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_productRecordId_fkey" FOREIGN KEY ("productRecordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "ProductSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeNotification" ADD CONSTRAINT "PriceChangeNotification_id_fkey" FOREIGN KEY ("id") REFERENCES "ProductNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeNotification" ADD CONSTRAINT "StatusChangeNotification_id_fkey" FOREIGN KEY ("id") REFERENCES "ProductNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
