/*
  Warnings:

  - You are about to drop the `ProductErrorRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ElementAttribute" AS ENUM ('HREF', 'SRC', 'VALUE', 'DATA_GA_PRODUCT_NAME');

-- CreateEnum
CREATE TYPE "ScrapingErrorCode" AS ENUM ('MISSING_ATTRIBUTE', 'INVALID_ATTRIBUTE', 'MISSING_TEXT', 'INVALID_TEXT', 'NONUNIQUE_TEXT', 'MISSING_ELEMENT', 'NONUNIQUE_ELEMENT', 'HTTP_NETWORK', 'HTTP_CLIENT', 'HTTP_SERIALIZATION');

-- DropTable
DROP TABLE "ProductErrorRecord";

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
    "parentHtml" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "InvalidTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT NOT NULL,

    CONSTRAINT "MissingTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonUniqueTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT NOT NULL,

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
CREATE TABLE "ScrapingErrorRecord" (
    "id" UUID NOT NULL,
    "errorId" UUID NOT NULL,
    "errorCode" "ScrapingErrorCode" NOT NULL,

    CONSTRAINT "ScrapingErrorRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScrapingErrorRecord_errorId_key" ON "ScrapingErrorRecord"("errorId");
