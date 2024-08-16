/*
  Warnings:

  - You are about to drop the `PriceChangeSubscribedEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatusChangeEventCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatusChangeSubscribedEvent` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,productId,subscriptionType]` on the table `ProductSubscription` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `condition` on the `PriceChangeNotification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `subscriptionType` to the `ProductSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PriceChangeSubscriptionCondition" AS ENUM ('PriceIncrease', 'PriceDecrease');

-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('NewProductSubscription', 'PriceChangeSubscription', 'StatusChangeSubscription');

-- DropForeignKey
ALTER TABLE "PriceChangeSubscribedEvent" DROP CONSTRAINT "PriceChangeSubscribedEvent_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeEventCondition" DROP CONSTRAINT "StatusChangeEventCondition_subscribedEventId_fkey";

-- DropForeignKey
ALTER TABLE "StatusChangeSubscribedEvent" DROP CONSTRAINT "StatusChangeSubscribedEvent_subscriptionId_fkey";

-- DropIndex
DROP INDEX "ProductSubscription_productId_userId_key";

-- AlterTable
ALTER TABLE "PriceChangeNotification" DROP COLUMN "condition",
ADD COLUMN     "condition" "PriceChangeSubscriptionCondition" NOT NULL;

-- AlterTable
ALTER TABLE "ProductSubscription" ADD COLUMN     "subscriptionType" "SubscriptionType" NOT NULL;

-- DropTable
DROP TABLE "PriceChangeSubscribedEvent";

-- DropTable
DROP TABLE "StatusChangeEventCondition";

-- DropTable
DROP TABLE "StatusChangeSubscribedEvent";

-- DropEnum
DROP TYPE "PriceChangeEventCondition";

-- CreateTable
CREATE TABLE "StatusChangeSubscriptionCondition" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fromStatus" "ProductStatus"[],
    "toStatus" "ProductStatus"[],
    "subscriptionId" UUID NOT NULL,

    CONSTRAINT "StatusChangeSubscriptionCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusChangeSubscription" (
    "id" UUID NOT NULL,

    CONSTRAINT "StatusChangeSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceChangeSubscription" (
    "id" UUID NOT NULL,
    "conditions" "PriceChangeSubscriptionCondition"[] DEFAULT ARRAY['PriceIncrease', 'PriceDecrease']::"PriceChangeSubscriptionCondition"[],

    CONSTRAINT "PriceChangeSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductSubscription_userId_productId_subscriptionType_key" ON "ProductSubscription"("userId", "productId", "subscriptionType");

-- AddForeignKey
ALTER TABLE "StatusChangeSubscriptionCondition" ADD CONSTRAINT "StatusChangeSubscriptionCondition_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "StatusChangeSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeSubscription" ADD CONSTRAINT "StatusChangeSubscription_id_fkey" FOREIGN KEY ("id") REFERENCES "ProductSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeSubscription" ADD CONSTRAINT "PriceChangeSubscription_id_fkey" FOREIGN KEY ("id") REFERENCES "ProductSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
