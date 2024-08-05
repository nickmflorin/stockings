/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    url: z.string(),
    status: z.number(),
}
);

/**
 * `HttpClientErrorData` schema excluding foreign keys and relations.
 */
export const HttpClientErrorDataScalarSchema = baseSchema;


/**
 * `HttpClientErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const HttpClientErrorDataSchema = HttpClientErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const HttpClientErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const HttpClientErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    url: z.string(),
    status: z.union([z.number(), z.record(z.unknown())])
}).partial();


/**
 * `HttpClientErrorData` schema for create operations excluding foreign keys and relations.
 */
export const HttpClientErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `HttpClientErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const HttpClientErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `HttpClientErrorData` schema for update operations excluding foreign keys and relations.
 */
export const HttpClientErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `HttpClientErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const HttpClientErrorDataUpdateSchema = HttpClientErrorDataUpdateScalarSchema;

