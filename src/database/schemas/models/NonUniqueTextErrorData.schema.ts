/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
}
);

/**
 * `NonUniqueTextErrorData` schema excluding foreign keys and relations.
 */
export const NonUniqueTextErrorDataScalarSchema = baseSchema;


/**
 * `NonUniqueTextErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const NonUniqueTextErrorDataSchema = NonUniqueTextErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const NonUniqueTextErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const NonUniqueTextErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish()
}).partial();


/**
 * `NonUniqueTextErrorData` schema for create operations excluding foreign keys and relations.
 */
export const NonUniqueTextErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `NonUniqueTextErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const NonUniqueTextErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `NonUniqueTextErrorData` schema for update operations excluding foreign keys and relations.
 */
export const NonUniqueTextErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `NonUniqueTextErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const NonUniqueTextErrorDataUpdateSchema = NonUniqueTextErrorDataUpdateScalarSchema;

