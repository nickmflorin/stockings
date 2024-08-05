/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventConfigContentTypeSchema,
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
 * `NotificationEventConfig` schema excluding foreign keys and relations.
 */
export const NotificationEventConfigScalarSchema = baseSchema;


/**
 * `NotificationEventConfig` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const NotificationEventConfigSchema = NotificationEventConfigScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const NotificationEventConfigPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const NotificationEventConfigPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventConfigContentTypeSchema
}).partial();


/**
 * `NotificationEventConfig` schema for create operations excluding foreign keys and relations.
 */
export const NotificationEventConfigCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});


/**
 * `NotificationEventConfig` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const NotificationEventConfigCreateSchema = NotificationEventConfigCreateScalarSchema.merge(fkSchema);


/**
 * `NotificationEventConfig` schema for update operations excluding foreign keys and relations.
 */
export const NotificationEventConfigUpdateScalarSchema = baseSchema.partial();


/**
 * `NotificationEventConfig` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const NotificationEventConfigUpdateSchema = NotificationEventConfigUpdateScalarSchema.merge(fkSchema.partial());

