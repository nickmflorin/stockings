/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    timestamp: z.coerce.date().default(() => new Date()),
    price: z.number().nullish(),
    rawPrice: z.string().nullish(),
    status: ProductStatusSchema.nullish(),
    wasManuallyCreated: z.boolean(),
    manuallyChangedFields: z.array(ProductRecordDataFieldSchema),
}
);
const relationSchema = z.object({
    createdBy: z.record(z.unknown()),
    updatedBy: z.record(z.unknown()),
    product: z.record(z.unknown()),
    errors: z.array(z.unknown()).optional(),
}
);
const fkSchema = z.object({
    createdById: z.string().uuid(),
    updatedById: z.string().uuid(),
    productId: z.string().uuid(),
}
);

/**
 * `ProductRecord` schema excluding foreign keys and relations.
 */
export const ProductRecordScalarSchema = baseSchema;


/**
 * `ProductRecord` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ProductRecordSchema = ProductRecordScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ProductRecordPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ProductRecordPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    timestamp: z.coerce.date().default(() => new Date()),
    price: z.union([z.number().nullish(), z.record(z.unknown())]),
    rawPrice: z.string().nullish(),
    status: ProductStatusSchema.nullish(),
    wasManuallyCreated: z.boolean(),
    manuallyChangedFields: z.array(ProductRecordDataFieldSchema)
}).partial();


/**
 * `ProductRecord` schema for create operations excluding foreign keys and relations.
 */
export const ProductRecordCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, timestamp: true, wasManuallyCreated: true, manuallyChangedFields: true
});


/**
 * `ProductRecord` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ProductRecordCreateSchema = ProductRecordCreateScalarSchema.merge(fkSchema);


/**
 * `ProductRecord` schema for update operations excluding foreign keys and relations.
 */
export const ProductRecordUpdateScalarSchema = baseSchema.partial();


/**
 * `ProductRecord` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ProductRecordUpdateSchema = ProductRecordUpdateScalarSchema.merge(fkSchema.partial());

