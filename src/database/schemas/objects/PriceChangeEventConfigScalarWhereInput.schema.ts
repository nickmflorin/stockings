/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumNotificationEventConfigContentTypeFilterObjectSchema } from './EnumNotificationEventConfigContentTypeFilter.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumPriceChangeEventTypeNullableListFilterObjectSchema } from './EnumPriceChangeEventTypeNullableListFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigScalarWhereInput>;
export const PriceChangeEventConfigScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productNotificationConfigId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventConfigContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventConfigContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumPriceChangeEventTypeNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
