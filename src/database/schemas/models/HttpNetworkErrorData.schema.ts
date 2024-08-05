/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    url: z.string(),
}
);

/**
 * `HttpNetworkErrorData` schema excluding foreign keys and relations.
 */
export const HttpNetworkErrorDataScalarSchema = baseSchema;


/**
 * `HttpNetworkErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const HttpNetworkErrorDataSchema = HttpNetworkErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const HttpNetworkErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const HttpNetworkErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    url: z.string()
}).partial();


/**
 * `HttpNetworkErrorData` schema for create operations excluding foreign keys and relations.
 */
export const HttpNetworkErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `HttpNetworkErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const HttpNetworkErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `HttpNetworkErrorData` schema for update operations excluding foreign keys and relations.
 */
export const HttpNetworkErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `HttpNetworkErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const HttpNetworkErrorDataUpdateSchema = HttpNetworkErrorDataUpdateScalarSchema;

