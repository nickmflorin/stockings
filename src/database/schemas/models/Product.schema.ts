/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductSubCategorySchema } from '../enums/ProductSubCategory.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    name: z.string().nullish(),
    slug: z.string(),
    code: z.string().nullish(),
    imageSrc: z.string().nullish(),
    status: ProductStatusSchema.nullish(),
    statusRecordedAt: z.coerce.date().nullish(),
    price: z.number().nullish(),
    priceRecordedAt: z.coerce.date().nullish(),
    category: ProductCategorySchema,
    subCategories: z.array(ProductSubCategorySchema),
}
);
const relationSchema = z.object({
    createdBy: z.record(z.unknown()),
    updatedBy: z.record(z.unknown()),
    records: z.array(z.unknown()).optional(),
    notificationEvents: z.array(z.unknown()).optional(),
}
);
const fkSchema = z.object({
    createdById: z.string().uuid(),
    updatedById: z.string().uuid(),
}
);

/**
 * `Product` schema excluding foreign keys and relations.
 */
export const ProductScalarSchema = baseSchema;


/**
 * `Product` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ProductSchema = ProductScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ProductPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ProductPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    name: z.string().nullish(),
    slug: z.string(),
    code: z.string().nullish(),
    imageSrc: z.string().nullish(),
    status: ProductStatusSchema.nullish(),
    statusRecordedAt: z.coerce.date().nullish(),
    price: z.union([z.number().nullish(), z.record(z.unknown())]),
    priceRecordedAt: z.coerce.date().nullish(),
    category: ProductCategorySchema,
    subCategories: z.array(ProductSubCategorySchema)
}).partial();


/**
 * `Product` schema for create operations excluding foreign keys and relations.
 */
export const ProductCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, subCategories: true
});


/**
 * `Product` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ProductCreateSchema = ProductCreateScalarSchema.merge(fkSchema);


/**
 * `Product` schema for update operations excluding foreign keys and relations.
 */
export const ProductUpdateScalarSchema = baseSchema.partial();


/**
 * `Product` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ProductUpdateSchema = ProductUpdateScalarSchema.merge(fkSchema.partial());

