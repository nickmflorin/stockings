/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventType } from '../../../../generated/models';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventContentTypeSchema,
    eventTypes: z.array(PriceChangeEventTypeSchema),
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
 * `PriceChangeEventC` schema excluding foreign keys and relations.
 */
export const PriceChangeEventCScalarSchema = baseSchema;


/**
 * `PriceChangeEventC` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const PriceChangeEventCSchema = PriceChangeEventCScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const PriceChangeEventCPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const PriceChangeEventCPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventContentTypeSchema,
    eventTypes: z.array(PriceChangeEventTypeSchema)
}).partial();


/**
 * `PriceChangeEventC` schema for create operations excluding foreign keys and relations.
 */
export const PriceChangeEventCCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, eventTypes: true
});


/**
 * `PriceChangeEventC` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const PriceChangeEventCCreateSchema = PriceChangeEventCCreateScalarSchema.merge(fkSchema);


/**
 * `PriceChangeEventC` schema for update operations excluding foreign keys and relations.
 */
export const PriceChangeEventCUpdateScalarSchema = baseSchema.partial();


/**
 * `PriceChangeEventC` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const PriceChangeEventCUpdateSchema = PriceChangeEventCUpdateScalarSchema.merge(fkSchema.partial());

