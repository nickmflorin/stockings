/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumNotificationEventContentTypeWithAggregatesFilterObjectSchema } from './EnumNotificationEventContentTypeWithAggregatesFilter.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumPriceChangeEventTypeNullableListFilterObjectSchema } from './EnumPriceChangeEventTypeNullableListFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCScalarWhereWithAggregatesInput>;
export const PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventContentTypeWithAggregatesFilterObjectSchema),
    z.lazy(() => NotificationEventContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumPriceChangeEventTypeNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
