/*
  Warnings:

  - Added the required column `subscriptionId` to the `PriceChangeNotification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionId` to the `StatusChangeNotification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PriceChangeNotification" ADD COLUMN     "subscriptionId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "StatusChangeNotification" ADD COLUMN     "subscriptionId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "PriceChangeNotification" ADD CONSTRAINT "PriceChangeNotification_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "PriceChangeSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeNotification" ADD CONSTRAINT "StatusChangeNotification_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "StatusChangeSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
