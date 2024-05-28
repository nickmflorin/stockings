-- CreateEnum
CREATE TYPE "ProductRecordStatus" AS ENUM ('OUT_OF_STOCK', 'IN_STOCK', 'NOT_LISTED');

-- CreateEnum
CREATE TYPE "ProductRecordDataFields" AS ENUM ('PRICE', 'RAW_PRICE', 'STATUS');

-- CreateEnum
CREATE TYPE "ProductRecordType" AS ENUM ('RECORDED', 'ERROR');

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
CREATE TABLE "ProductErrorRecord" (
    "id" UUID NOT NULL,
    "errorMessage" TEXT NOT NULL,

    CONSTRAINT "ProductErrorRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecordedRecord" (
    "id" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "rawPrice" TEXT NOT NULL,
    "status" "ProductRecordStatus" NOT NULL,
    "wasManuallyCreated" BOOLEAN NOT NULL DEFAULT false,
    "manuallyChangedFields" "ProductRecordDataFields"[] DEFAULT ARRAY[]::"ProductRecordDataFields"[],

    CONSTRAINT "ProductRecordedRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecord" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "recordType" "ProductRecordType" NOT NULL,
    "recordId" UUID NOT NULL,
    "productId" UUID NOT NULL,

    CONSTRAINT "ProductRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecord_recordId_key" ON "ProductRecord"("recordId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecord_productId_recordId_key" ON "ProductRecord"("productId", "recordId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_code_key" ON "Product"("code");

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
