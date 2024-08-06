/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventContentTypeSchema,
}
);
const relationSchema = z.object({
    createdBy: z.record(z.unknown()),
    updatedBy: z.record(z.unknown()),
    product: z.record(z.unknown()),
    user: z.record(z.unknown()),
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
 * `NotificationEvent` schema excluding foreign keys and relations.
 */
export const NotificationEventScalarSchema = baseSchema;


/**
 * `NotificationEvent` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const NotificationEventSchema = NotificationEventScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const NotificationEventPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const NotificationEventPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventContentTypeSchema
}).partial();


/**
 * `NotificationEvent` schema for create operations excluding foreign keys and relations.
 */
export const NotificationEventCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});


/**
 * `NotificationEvent` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const NotificationEventCreateSchema = NotificationEventCreateScalarSchema.merge(fkSchema);


/**
 * `NotificationEvent` schema for update operations excluding foreign keys and relations.
 */
export const NotificationEventUpdateScalarSchema = baseSchema.partial();


/**
 * `NotificationEvent` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const NotificationEventUpdateSchema = NotificationEventUpdateScalarSchema.merge(fkSchema.partial());

