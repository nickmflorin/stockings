-- DropForeignKey
ALTER TABLE "ProductNotification" DROP CONSTRAINT "ProductNotification_subscriptionId_fkey";

-- AlterTable
ALTER TABLE "ProductNotification" ALTER COLUMN "subscriptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductNotification" ADD CONSTRAINT "ProductNotification_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "ProductSubscription"("id") ON DELETE SET NULL ON UPDATE CASCADE;
