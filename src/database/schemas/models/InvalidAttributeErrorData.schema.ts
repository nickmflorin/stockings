/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    attribute: ElementAttributeSchema,
    parentHtml: z.string().nullish(),
    value: z.string(),
}
);

/**
 * `InvalidAttributeErrorData` schema excluding foreign keys and relations.
 */
export const InvalidAttributeErrorDataScalarSchema = baseSchema;


/**
 * `InvalidAttributeErrorData` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const InvalidAttributeErrorDataSchema = InvalidAttributeErrorDataScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const InvalidAttributeErrorDataPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const InvalidAttributeErrorDataPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    attribute: ElementAttributeSchema,
    parentHtml: z.string().nullish(),
    value: z.string()
}).partial();


/**
 * `InvalidAttributeErrorData` schema for create operations excluding foreign keys and relations.
 */
export const InvalidAttributeErrorDataCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `InvalidAttributeErrorData` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const InvalidAttributeErrorDataCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `InvalidAttributeErrorData` schema for update operations excluding foreign keys and relations.
 */
export const InvalidAttributeErrorDataUpdateScalarSchema = baseSchema.partial();


/**
 * `InvalidAttributeErrorData` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const InvalidAttributeErrorDataUpdateSchema = InvalidAttributeErrorDataUpdateScalarSchema;

