-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('NewProductNotification', 'PriceChangeNotification', 'StatusChangeNotification');

-- CreateEnum
CREATE TYPE "NotificationState" AS ENUM ('Pending', 'Sent', 'Failed');

-- AlterTable
ALTER TABLE "ProductRecord" ADD COLUMN     "isProcessed" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Notification" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "notificationType" "NotificationType" NOT NULL,
    "state" "NotificationState" NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceChangeNotification" (
    "id" UUID NOT NULL,
    "productRecordId" UUID NOT NULL,
    "condition" "PriceChangeEventCondition" NOT NULL,

    CONSTRAINT "PriceChangeNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusChangeNotification" (
    "id" UUID NOT NULL,
    "productRecordId" UUID NOT NULL,
    "fromStatus" "ProductStatus" NOT NULL,
    "toStatus" "ProductStatus" NOT NULL,

    CONSTRAINT "StatusChangeNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewProductNotification" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,

    CONSTRAINT "NewProductNotification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeNotification" ADD CONSTRAINT "PriceChangeNotification_productRecordId_fkey" FOREIGN KEY ("productRecordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeNotification" ADD CONSTRAINT "PriceChangeNotification_id_fkey" FOREIGN KEY ("id") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeNotification" ADD CONSTRAINT "StatusChangeNotification_productRecordId_fkey" FOREIGN KEY ("productRecordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeNotification" ADD CONSTRAINT "StatusChangeNotification_id_fkey" FOREIGN KEY ("id") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewProductNotification" ADD CONSTRAINT "NewProductNotification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewProductNotification" ADD CONSTRAINT "NewProductNotification_id_fkey" FOREIGN KEY ("id") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
