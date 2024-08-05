/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
    selector: z.string(),
}
);

/**
 * `NonUniqueElementErrorData` schema excluding foreign keys and relations.
 */
export const NonUniqueElementErrorDataScalarSchema = baseSchema;


/**
 * `NonUniqueElementErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const NonUniqueElementErrorDataSchema = NonUniqueElementErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const NonUniqueElementErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const NonUniqueElementErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
    selector: z.string()
}).partial();


/**
 * `NonUniqueElementErrorData` schema for create operations excluding foreign keys and relations.
 */
export const NonUniqueElementErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `NonUniqueElementErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const NonUniqueElementErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `NonUniqueElementErrorData` schema for update operations excluding foreign keys and relations.
 */
export const NonUniqueElementErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `NonUniqueElementErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const NonUniqueElementErrorDataUpdateSchema = NonUniqueElementErrorDataUpdateScalarSchema;

