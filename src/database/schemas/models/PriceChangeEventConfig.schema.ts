/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventType } from '../../../../generated/models';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';
const baseSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventConfigContentTypeSchema,
    eventTypes: z.array(PriceChangeEventTypeSchema),
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
 * `PriceChangeEventConfig` schema excluding foreign keys and relations.
 */
export const PriceChangeEventConfigScalarSchema = baseSchema;


/**
 * `PriceChangeEventConfig` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const PriceChangeEventConfigSchema = PriceChangeEventConfigScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const PriceChangeEventConfigPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const PriceChangeEventConfigPrismaUpdateSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    contentType: NotificationEventConfigContentTypeSchema,
    eventTypes: z.array(PriceChangeEventTypeSchema)
}).partial();


/**
 * `PriceChangeEventConfig` schema for create operations excluding foreign keys and relations.
 */
export const PriceChangeEventConfigCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, eventTypes: true
});


/**
 * `PriceChangeEventConfig` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const PriceChangeEventConfigCreateSchema = PriceChangeEventConfigCreateScalarSchema.merge(fkSchema);


/**
 * `PriceChangeEventConfig` schema for update operations excluding foreign keys and relations.
 */
export const PriceChangeEventConfigUpdateScalarSchema = baseSchema.partial();


/**
 * `PriceChangeEventConfig` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const PriceChangeEventConfigUpdateSchema = PriceChangeEventConfigUpdateScalarSchema.merge(fkSchema.partial());

