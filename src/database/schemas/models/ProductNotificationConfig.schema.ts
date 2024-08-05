/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
}
);
const relationSchema = z.object({
    createdBy: z.record(z.unknown()),
    updatedBy: z.record(z.unknown()),
    product: z.record(z.unknown()),
    user: z.record(z.unknown()),
    eventConfigs: z.array(z.unknown()).optional(),
}
);
const fkSchema = z.object({
    createdById: z.string().uuid(),
    updatedById: z.string().uuid(),
    productId: z.string().uuid(),
    userId: z.string().uuid(),
}
);

/**
 * `ProductNotificationConfig` schema excluding foreign keys and relations.
 */
export const ProductNotificationConfigScalarSchema = baseSchema;


/**
 * `ProductNotificationConfig` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ProductNotificationConfigSchema = ProductNotificationConfigScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ProductNotificationConfigPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ProductNotificationConfigPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date()
}).partial();


/**
 * `ProductNotificationConfig` schema for create operations excluding foreign keys and relations.
 */
export const ProductNotificationConfigCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});


/**
 * `ProductNotificationConfig` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ProductNotificationConfigCreateSchema = ProductNotificationConfigCreateScalarSchema.merge(fkSchema);


/**
 * `ProductNotificationConfig` schema for update operations excluding foreign keys and relations.
 */
export const ProductNotificationConfigUpdateScalarSchema = baseSchema.partial();


/**
 * `ProductNotificationConfig` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ProductNotificationConfigUpdateSchema = ProductNotificationConfigUpdateScalarSchema.merge(fkSchema.partial());

