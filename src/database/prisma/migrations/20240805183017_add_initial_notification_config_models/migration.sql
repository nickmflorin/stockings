-- CreateEnum
CREATE TYPE "PriceChangeEventConfigType" AS ENUM ('PRICE_INCREASE', 'PRICE_DECREASE');

-- CreateTable
CREATE TABLE "PriceChangeEventConfig" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" UUID NOT NULL,
    "productNotificationConfigId" UUID NOT NULL,
    "configType" "PriceChangeEventConfigType"[] DEFAULT ARRAY['PRICE_INCREASE', 'PRICE_DECREASE']::"PriceChangeEventConfigType"[],

    CONSTRAINT "PriceChangeEventConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusChangeEventConfig" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" UUID NOT NULL,
    "productNotificationConfigId" UUID NOT NULL,
    "statuses" "ProductStatus"[],

    CONSTRAINT "StatusChangeEventConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductNotificationConfig" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "ProductNotificationConfig_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PriceChangeEventConfig" ADD CONSTRAINT "PriceChangeEventConfig_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeEventConfig" ADD CONSTRAINT "PriceChangeEventConfig_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeEventConfig" ADD CONSTRAINT "PriceChangeEventConfig_productNotificationConfigId_fkey" FOREIGN KEY ("productNotificationConfigId") REFERENCES "ProductNotificationConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeEventConfig" ADD CONSTRAINT "StatusChangeEventConfig_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeEventConfig" ADD CONSTRAINT "StatusChangeEventConfig_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeEventConfig" ADD CONSTRAINT "StatusChangeEventConfig_productNotificationConfigId_fkey" FOREIGN KEY ("productNotificationConfigId") REFERENCES "ProductNotificationConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotificationConfig" ADD CONSTRAINT "ProductNotificationConfig_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotificationConfig" ADD CONSTRAINT "ProductNotificationConfig_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotificationConfig" ADD CONSTRAINT "ProductNotificationConfig_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductNotificationConfig" ADD CONSTRAINT "ProductNotificationConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
