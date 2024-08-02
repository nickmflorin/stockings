/*
  Warnings:

  - You are about to drop the column `recordId` on the `ProductRecord` table. All the data in the column will be lost.
  - You are about to drop the column `recordType` on the `ProductRecord` table. All the data in the column will be lost.
  - You are about to drop the `ProductRecordedRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScrapingErrorRecord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `ProductRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductRecordDataField" AS ENUM ('PRICE', 'RAW_PRICE', 'STATUS');

-- AlterEnum
ALTER TYPE "ProductRecordStatus" ADD VALUE 'AVAILABLE_FOR_BACKORDER';

-- DropIndex
DROP INDEX "Product_code_key";

-- DropIndex
DROP INDEX "Product_name_key";

-- DropIndex
DROP INDEX "ProductRecord_productId_recordId_key";

-- DropIndex
DROP INDEX "ProductRecord_recordId_key";

-- AlterTable
ALTER TABLE "InvalidTextErrorData" ALTER COLUMN "parentHtml" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MissingTextErrorData" ALTER COLUMN "parentHtml" DROP NOT NULL;

-- AlterTable
ALTER TABLE "NonUniqueTextErrorData" ALTER COLUMN "parentHtml" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "code" DROP NOT NULL,
ALTER COLUMN "imageSrc" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductRecord" DROP COLUMN "recordId",
DROP COLUMN "recordType",
ADD COLUMN     "manuallyChangedFields" "ProductRecordDataField"[] DEFAULT ARRAY[]::"ProductRecordDataField"[],
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "rawPrice" TEXT,
ADD COLUMN     "status" "ProductRecordStatus",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "wasManuallyCreated" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "ProductRecordedRecord";

-- DropTable
DROP TABLE "ScrapingErrorRecord";

-- DropEnum
DROP TYPE "ProductRecordDataFields";

-- DropEnum
DROP TYPE "ProductRecordType";

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
CREATE TABLE "ProductRecordError" (
    "id" UUID NOT NULL,
    "errorId" UUID NOT NULL,
    "errorCode" "ScrapingErrorCode" NOT NULL,
    "recordId" UUID NOT NULL,
    "field" "ProductRecordDataField" NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ProductRecordError_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecordError_errorId_key" ON "ProductRecordError"("errorId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecordError_recordId_key" ON "ProductRecordError"("recordId");

-- AddForeignKey
ALTER TABLE "ProductRecordError" ADD CONSTRAINT "ProductRecordError_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
