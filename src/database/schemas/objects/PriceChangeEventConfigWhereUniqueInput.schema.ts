/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereInputObjectSchema } from './PriceChangeEventConfigWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumNotificationEventConfigContentTypeFilterObjectSchema } from './EnumNotificationEventConfigContentTypeFilter.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumPriceChangeEventTypeNullableListFilterObjectSchema } from './EnumPriceChangeEventTypeNullableListFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductNotificationConfigRelationFilterObjectSchema } from './ProductNotificationConfigRelationFilter.schema';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigWhereUniqueInput>;
export const PriceChangeEventConfigWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema).array()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productNotificationConfigId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventConfigContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventConfigContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumPriceChangeEventTypeNullableListFilterObjectSchema).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), productNotificationConfig: z.union([z.lazy(() => ProductNotificationConfigRelationFilterObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
