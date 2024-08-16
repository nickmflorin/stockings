/*
  Warnings:

  - You are about to drop the column `fromStatus` on the `StatusChangeNotification` table. All the data in the column will be lost.
  - You are about to drop the column `toStatus` on the `StatusChangeNotification` table. All the data in the column will be lost.
  - Added the required column `newPrice` to the `PriceChangeNotification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previousPrice` to the `PriceChangeNotification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newStatus` to the `StatusChangeNotification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previousStatus` to the `StatusChangeNotification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PriceChangeNotification" ADD COLUMN     "newPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "previousPrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "StatusChangeNotification" DROP COLUMN "fromStatus",
DROP COLUMN "toStatus",
ADD COLUMN     "newStatus" "ProductStatus" NOT NULL,
ADD COLUMN     "previousStatus" "ProductStatus" NOT NULL;
