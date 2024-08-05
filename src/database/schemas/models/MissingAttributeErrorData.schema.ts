/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    attribute: ElementAttributeSchema,
    parentHtml: z.string().nullish(),
}
);

/**
 * `MissingAttributeErrorData` schema excluding foreign keys and relations.
 */
export const MissingAttributeErrorDataScalarSchema = baseSchema;


/**
 * `MissingAttributeErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const MissingAttributeErrorDataSchema = MissingAttributeErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const MissingAttributeErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const MissingAttributeErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    attribute: ElementAttributeSchema,
    parentHtml: z.string().nullish()
}).partial();


/**
 * `MissingAttributeErrorData` schema for create operations excluding foreign keys and relations.
 */
export const MissingAttributeErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `MissingAttributeErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const MissingAttributeErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `MissingAttributeErrorData` schema for update operations excluding foreign keys and relations.
 */
export const MissingAttributeErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `MissingAttributeErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const MissingAttributeErrorDataUpdateSchema = MissingAttributeErrorDataUpdateScalarSchema;

