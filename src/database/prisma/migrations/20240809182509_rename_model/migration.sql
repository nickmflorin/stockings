/*
  Warnings:

  - You are about to drop the `StatusChangeSubscribedEventCondition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StatusChangeSubscribedEventCondition" DROP CONSTRAINT "StatusChangeSubscribedEventCondition_subscribedEventId_fkey";

-- DropTable
DROP TABLE "StatusChangeSubscribedEventCondition";

-- CreateTable
CREATE TABLE "StatusChangeEventCondition" (
    "id" UUID NOT NULL,
    "fromStatus" "ProductStatus"[],
    "toStatus" "ProductStatus"[],
    "anyFromStatus" BOOLEAN NOT NULL,
    "anyToStatus" BOOLEAN NOT NULL,
    "subscribedEventId" UUID NOT NULL,

    CONSTRAINT "StatusChangeEventCondition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StatusChangeEventCondition" ADD CONSTRAINT "StatusChangeEventCondition_subscribedEventId_fkey" FOREIGN KEY ("subscribedEventId") REFERENCES "StatusChangeSubscribedEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
