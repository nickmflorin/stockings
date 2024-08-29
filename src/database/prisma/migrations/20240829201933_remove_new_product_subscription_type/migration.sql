/*
  Warnings:

  - Changed the type of `subscriptionType` on the `ProductSubscription` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProductSubscriptionType" AS ENUM ('PriceChangeSubscription', 'StatusChangeSubscription');

-- AlterTable
ALTER TABLE "ProductSubscription" DROP COLUMN "subscriptionType",
ADD COLUMN     "subscriptionType" "ProductSubscriptionType" NOT NULL;

-- DropEnum
DROP TYPE "SubscriptionType";

-- CreateIndex
CREATE UNIQUE INDEX "ProductSubscription_userId_productId_subscriptionType_key" ON "ProductSubscription"("userId", "productId", "subscriptionType");
