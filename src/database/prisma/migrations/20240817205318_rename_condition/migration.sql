/*
  Warnings:

  - The `conditions` column on the `PriceChangeSubscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `condition` on the `PriceChangeNotification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PriceChangeCondition" AS ENUM ('PriceIncrease', 'PriceDecrease');

-- AlterTable
ALTER TABLE "PriceChangeNotification" DROP COLUMN "condition",
ADD COLUMN     "condition" "PriceChangeCondition" NOT NULL;

-- AlterTable
ALTER TABLE "PriceChangeSubscription" DROP COLUMN "conditions",
ADD COLUMN     "conditions" "PriceChangeCondition"[] DEFAULT ARRAY['PriceIncrease', 'PriceDecrease']::"PriceChangeCondition"[];

-- DropEnum
DROP TYPE "PriceChangeSubscriptionCondition";
