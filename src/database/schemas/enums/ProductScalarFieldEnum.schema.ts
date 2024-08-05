/* eslint-disable */
import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(["id", "createdAt", "createdById", "updatedAt", "updatedById", "name", "slug", "code", "imageSrc", "status", "statusRecordedAt", "price", "priceRecordedAt", "category", "subCategories"])
