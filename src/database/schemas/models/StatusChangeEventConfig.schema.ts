/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventConfigContentTypeSchema,
    eventTypes: z.array(ProductStatusSchema),
}
);
const relationSchema = z.object({
    createdBy: z.record(z.unknown()),
    updatedBy: z.record(z.unknown()),
    productNotificationConfig: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    createdById: z.string().uuid(),
    updatedById: z.string().uuid(),
    productNotificationConfigId: z.string().uuid(),
}
);

/**
 * `StatusChangeEventConfig` schema excluding foreign keys and relations.
 */
export const StatusChangeEventConfigScalarSchema = baseSchema;


/**
 * `StatusChangeEventConfig` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const StatusChangeEventConfigSchema = StatusChangeEventConfigScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const StatusChangeEventConfigPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const StatusChangeEventConfigPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventConfigContentTypeSchema,
    eventTypes: z.array(ProductStatusSchema)
}).partial();


/**
 * `StatusChangeEventConfig` schema for create operations excluding foreign keys and relations.
 */
export const StatusChangeEventConfigCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, eventTypes: true
});


/**
 * `StatusChangeEventConfig` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const StatusChangeEventConfigCreateSchema = StatusChangeEventConfigCreateScalarSchema.merge(fkSchema);


/**
 * `StatusChangeEventConfig` schema for update operations excluding foreign keys and relations.
 */
export const StatusChangeEventConfigUpdateScalarSchema = baseSchema.partial();


/**
 * `StatusChangeEventConfig` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const StatusChangeEventConfigUpdateSchema = StatusChangeEventConfigUpdateScalarSchema.merge(fkSchema.partial());

