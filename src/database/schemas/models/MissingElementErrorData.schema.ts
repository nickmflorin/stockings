/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
    selector: z.string(),
}
);

/**
 * `MissingElementErrorData` schema excluding foreign keys and relations.
 */
export const MissingElementErrorDataScalarSchema = baseSchema;


/**
 * `MissingElementErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const MissingElementErrorDataSchema = MissingElementErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const MissingElementErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const MissingElementErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
    selector: z.string()
}).partial();


/**
 * `MissingElementErrorData` schema for create operations excluding foreign keys and relations.
 */
export const MissingElementErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `MissingElementErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const MissingElementErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `MissingElementErrorData` schema for update operations excluding foreign keys and relations.
 */
export const MissingElementErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `MissingElementErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const MissingElementErrorDataUpdateSchema = MissingElementErrorDataUpdateScalarSchema;

