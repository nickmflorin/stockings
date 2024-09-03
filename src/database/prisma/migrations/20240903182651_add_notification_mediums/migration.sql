-- CreateEnum
CREATE TYPE "NotificationMedium" AS ENUM ('Email', 'SMS', 'Application');

-- AlterTable
ALTER TABLE "ProductNotification" ADD COLUMN     "mediums" "NotificationMedium"[] DEFAULT ARRAY['Application']::"NotificationMedium"[];

-- AlterTable
ALTER TABLE "ProductSubscription" ADD COLUMN     "mediums" "NotificationMedium"[] DEFAULT ARRAY['Application']::"NotificationMedium"[];
