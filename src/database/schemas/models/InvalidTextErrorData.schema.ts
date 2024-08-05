/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
    value: z.string(),
}
);

/**
 * `InvalidTextErrorData` schema excluding foreign keys and relations.
 */
export const InvalidTextErrorDataScalarSchema = baseSchema;


/**
 * `InvalidTextErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const InvalidTextErrorDataSchema = InvalidTextErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const InvalidTextErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const InvalidTextErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
    value: z.string()
}).partial();


/**
 * `InvalidTextErrorData` schema for create operations excluding foreign keys and relations.
 */
export const InvalidTextErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `InvalidTextErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const InvalidTextErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `InvalidTextErrorData` schema for update operations excluding foreign keys and relations.
 */
export const InvalidTextErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `InvalidTextErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const InvalidTextErrorDataUpdateSchema = InvalidTextErrorDataUpdateScalarSchema;

