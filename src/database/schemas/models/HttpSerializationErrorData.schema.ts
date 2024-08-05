/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    url: z.string(),
}
);

/**
 * `HttpSerializationErrorData` schema excluding foreign keys and relations.
 */
export const HttpSerializationErrorDataScalarSchema = baseSchema;


/**
 * `HttpSerializationErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const HttpSerializationErrorDataSchema = HttpSerializationErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const HttpSerializationErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const HttpSerializationErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    url: z.string()
}).partial();


/**
 * `HttpSerializationErrorData` schema for create operations excluding foreign keys and relations.
 */
export const HttpSerializationErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `HttpSerializationErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const HttpSerializationErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `HttpSerializationErrorData` schema for update operations excluding foreign keys and relations.
 */
export const HttpSerializationErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `HttpSerializationErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const HttpSerializationErrorDataUpdateSchema = HttpSerializationErrorDataUpdateScalarSchema;

