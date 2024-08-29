/*
  Warnings:

  - Added the required column `productId` to the `PriceChangeNotification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `StatusChangeNotification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PriceChangeNotification" ADD COLUMN     "productId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "StatusChangeNotification" ADD COLUMN     "productId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "PriceChangeNotification" ADD CONSTRAINT "PriceChangeNotification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeNotification" ADD CONSTRAINT "StatusChangeNotification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
