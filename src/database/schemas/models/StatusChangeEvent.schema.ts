/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventContentTypeSchema,
    eventTypes: z.array(ProductStatusSchema),
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
 * `StatusChangeEvent` schema excluding foreign keys and relations.
 */
export const StatusChangeEventScalarSchema = baseSchema;


/**
 * `StatusChangeEvent` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const StatusChangeEventSchema = StatusChangeEventScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const StatusChangeEventPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const StatusChangeEventPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventContentTypeSchema,
    eventTypes: z.array(ProductStatusSchema)
}).partial();


/**
 * `StatusChangeEvent` schema for create operations excluding foreign keys and relations.
 */
export const StatusChangeEventCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, eventTypes: true
});


/**
 * `StatusChangeEvent` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const StatusChangeEventCreateSchema = StatusChangeEventCreateScalarSchema.merge(fkSchema);


/**
 * `StatusChangeEvent` schema for update operations excluding foreign keys and relations.
 */
export const StatusChangeEventUpdateScalarSchema = baseSchema.partial();


/**
 * `StatusChangeEvent` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const StatusChangeEventUpdateSchema = StatusChangeEventUpdateScalarSchema.merge(fkSchema.partial());

