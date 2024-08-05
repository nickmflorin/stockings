/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish(),
}
);

/**
 * `MissingTextErrorData` schema excluding foreign keys and relations.
 */
export const MissingTextErrorDataScalarSchema = baseSchema;


/**
 * `MissingTextErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const MissingTextErrorDataSchema = MissingTextErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const MissingTextErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const MissingTextErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    parentHtml: z.string().nullish()
}).partial();


/**
 * `MissingTextErrorData` schema for create operations excluding foreign keys and relations.
 */
export const MissingTextErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `MissingTextErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const MissingTextErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `MissingTextErrorData` schema for update operations excluding foreign keys and relations.
 */
export const MissingTextErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `MissingTextErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const MissingTextErrorDataUpdateSchema = MissingTextErrorDataUpdateScalarSchema;

