-- CreateEnum
CREATE TYPE "ElementAttribute" AS ENUM ('HREF', 'SRC', 'VALUE', 'DATA_GA_PRODUCT_NAME');

-- CreateEnum
CREATE TYPE "ScrapingErrorCode" AS ENUM ('MISSING_ATTRIBUTE', 'INVALID_ATTRIBUTE', 'MISSING_TEXT', 'INVALID_TEXT', 'NONUNIQUE_TEXT', 'MISSING_ELEMENT', 'NONUNIQUE_ELEMENT', 'HTTP_NETWORK', 'HTTP_CLIENT', 'HTTP_SERIALIZATION');

-- CreateEnum
CREATE TYPE "ProductRecordDataField" AS ENUM ('PRICE', 'RAW_PRICE', 'STATUS');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('OutOfStock', 'InStock', 'AvailableForBackorder', 'NotListed');

-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('HandTools');

-- CreateEnum
CREATE TYPE "ProductSubCategory" AS ENUM ('HandPlanes', 'Saws', 'Chisels', 'Spokeshaves', 'GreenWoodworking', 'AccessoryTools');

-- CreateEnum
CREATE TYPE "PriceChangeEventCondition" AS ENUM ('PriceIncrease', 'PriceDecrease');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('NewProductNotification', 'PriceChangeNotification', 'StatusChangeNotification');

-- CreateEnum
CREATE TYPE "NotificationState" AS ENUM ('Pending', 'Sent', 'Failed');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "clerkId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "profileImageUrl" TEXT,
    "emailAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HttpNetworkErrorData" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "HttpNetworkErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HttpSerializationErrorData" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "HttpSerializationErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HttpClientErrorData" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "HttpClientErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingAttributeErrorData" (
    "id" UUID NOT NULL,
    "attribute" "ElementAttribute" NOT NULL,
    "parentHtml" TEXT,

    CONSTRAINT "MissingAttributeErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvalidAttributeErrorData" (
    "id" UUID NOT NULL,
    "attribute" "ElementAttribute" NOT NULL,
    "parentHtml" TEXT,
    "value" TEXT NOT NULL,

    CONSTRAINT "InvalidAttributeErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvalidTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,
    "value" TEXT NOT NULL,

    CONSTRAINT "InvalidTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,

    CONSTRAINT "MissingTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonUniqueTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,

    CONSTRAINT "NonUniqueTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingElementErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,
    "selector" TEXT NOT NULL,

    CONSTRAINT "MissingElementErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonUniqueElementErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,
    "selector" TEXT NOT NULL,

    CONSTRAINT "NonUniqueElementErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecordError" (
    "id" UUID NOT NULL,
    "errorId" UUID NOT NULL,
    "errorCode" "ScrapingErrorCode" NOT NULL,
    "recordId" UUID NOT NULL,
    "field" "ProductRecordDataField" NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ProductRecordError_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecord" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" UUID NOT NULL,
    "price" DOUBLE PRECISION,
    "rawPrice" TEXT,
    "status" "ProductStatus",
    "wasManuallyCreated" BOOLEAN NOT NULL DEFAULT false,
    "manuallyChangedFields" "ProductRecordDataField"[] DEFAULT ARRAY[]::"ProductRecordDataField"[],

    CONSTRAINT "ProductRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessedProductRecord" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "recordId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "ProcessedProductRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "name" TEXT,
    "slug" TEXT NOT NULL,
    "code" TEXT,
    "imageSrc" TEXT,
    "status" "ProductStatus",
    "statusLastUpdatedAt" TIMESTAMP(3),
    "statusAsOf" TIMESTAMP(3),
    "price" DOUBLE PRECISION,
    "priceLastUpdatedAt" TIMESTAMP(3),
    "priceAsOf" TIMESTAMP(3),
    "category" "ProductCategory" NOT NULL,
    "subCategories" "ProductSubCategory"[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceChangeSubscribedEvent" (
    "id" UUID NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "subscriptionId" UUID NOT NULL,
    "conditions" "PriceChangeEventCondition"[] DEFAULT ARRAY['PriceIncrease', 'PriceDecrease']::"PriceChangeEventCondition"[],

    CONSTRAINT "PriceChangeSubscribedEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusChangeEventCondition" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fromStatus" "ProductStatus"[],
    "toStatus" "ProductStatus"[],
    "subscribedEventId" UUID NOT NULL,

    CONSTRAINT "StatusChangeEventCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusChangeSubscribedEvent" (
    "id" UUID NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "subscriptionId" UUID NOT NULL,

    CONSTRAINT "StatusChangeSubscribedEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSubscription" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ProductSubscription_pkey" PRIMARY KEY ("id")
);

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
    "stateAsOf" TIMESTAMP(3) NOT NULL,
    "failedAt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),

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

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecordError_errorId_key" ON "ProductRecordError"("errorId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecordError_recordId_key" ON "ProductRecordError"("recordId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PriceChangeSubscribedEvent_subscriptionId_key" ON "PriceChangeSubscribedEvent"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "StatusChangeSubscribedEvent_subscriptionId_key" ON "StatusChangeSubscribedEvent"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSubscription_productId_userId_key" ON "ProductSubscription"("productId", "userId");

-- AddForeignKey
ALTER TABLE "ProductRecordError" ADD CONSTRAINT "ProductRecordError_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessedProductRecord" ADD CONSTRAINT "ProcessedProductRecord_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessedProductRecord" ADD CONSTRAINT "ProcessedProductRecord_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessedProductRecord" ADD CONSTRAINT "ProcessedProductRecord_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessedProductRecord" ADD CONSTRAINT "ProcessedProductRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceChangeSubscribedEvent" ADD CONSTRAINT "PriceChangeSubscribedEvent_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "ProductSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeEventCondition" ADD CONSTRAINT "StatusChangeEventCondition_subscribedEventId_fkey" FOREIGN KEY ("subscribedEventId") REFERENCES "StatusChangeSubscribedEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusChangeSubscribedEvent" ADD CONSTRAINT "StatusChangeSubscribedEvent_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "ProductSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSubscription" ADD CONSTRAINT "ProductSubscription_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSubscription" ADD CONSTRAINT "ProductSubscription_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSubscription" ADD CONSTRAINT "ProductSubscription_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSubscription" ADD CONSTRAINT "ProductSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
