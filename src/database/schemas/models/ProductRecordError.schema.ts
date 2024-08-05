/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    errorId: z.string().uuid(),
    errorCode: ScrapingErrorCodeSchema,
    field: ProductRecordDataFieldSchema,
    message: z.string(),
}
);
const relationSchema = z.object({
    record: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    recordId: z.string().uuid(),
}
);

/**
 * `ProductRecordError` schema excluding foreign keys and relations.
 */
export const ProductRecordErrorScalarSchema = baseSchema;


/**
 * `ProductRecordError` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ProductRecordErrorSchema = ProductRecordErrorScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ProductRecordErrorPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ProductRecordErrorPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    errorId: z.string().uuid(),
    errorCode: ScrapingErrorCodeSchema,
    field: ProductRecordDataFieldSchema,
    message: z.string()
}).partial();


/**
 * `ProductRecordError` schema for create operations excluding foreign keys and relations.
 */
export const ProductRecordErrorCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `ProductRecordError` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ProductRecordErrorCreateSchema = ProductRecordErrorCreateScalarSchema.merge(fkSchema);


/**
 * `ProductRecordError` schema for update operations excluding foreign keys and relations.
 */
export const ProductRecordErrorUpdateScalarSchema = baseSchema.partial();


/**
 * `ProductRecordError` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ProductRecordErrorUpdateSchema = ProductRecordErrorUpdateScalarSchema.merge(fkSchema.partial());

