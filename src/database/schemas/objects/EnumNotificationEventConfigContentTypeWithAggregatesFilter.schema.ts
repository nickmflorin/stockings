/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { NestedEnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema } from './NestedEnumNotificationEventConfigContentTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNotificationEventConfigContentTypeFilterObjectSchema } from './NestedEnumNotificationEventConfigContentTypeFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumNotificationEventConfigContentTypeWithAggregatesFilter>;
export const EnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => NotificationEventConfigContentTypeSchema).optional(), in: z.lazy(() => NotificationEventConfigContentTypeSchema).array().optional(), notIn: z.lazy(() => NotificationEventConfigContentTypeSchema).array().optional(), not: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => NestedEnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumNotificationEventConfigContentTypeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumNotificationEventConfigContentTypeFilterObjectSchema).optional()
}).strict() as SchemaType;
