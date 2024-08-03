/*
  Warnings:

  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('HandTools');

-- CreateEnum
CREATE TYPE "ProductSubCategory" AS ENUM ('HandPlanes', 'Saws', 'Chisels', 'Spokeshaves', 'GreenWoodworking', 'AccessoryTools');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "ProductCategory" NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "status" "ProductStatus",
ADD COLUMN     "subCategories" "ProductSubCategory"[];
