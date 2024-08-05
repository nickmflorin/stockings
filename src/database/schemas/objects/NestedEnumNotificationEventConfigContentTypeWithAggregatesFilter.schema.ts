/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNotificationEventConfigContentTypeFilterObjectSchema } from './NestedEnumNotificationEventConfigContentTypeFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedEnumNotificationEventConfigContentTypeWithAggregatesFilter>;
export const NestedEnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => NotificationEventConfigContentTypeSchema).optional(), in: z.lazy(() => NotificationEventConfigContentTypeSchema).array().optional(), notIn: z.lazy(() => NotificationEventConfigContentTypeSchema).array().optional(), not: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => NestedEnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumNotificationEventConfigContentTypeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumNotificationEventConfigContentTypeFilterObjectSchema).optional()
}).strict() as SchemaType;
