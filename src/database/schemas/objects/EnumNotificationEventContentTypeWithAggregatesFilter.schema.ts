/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { NestedEnumNotificationEventContentTypeWithAggregatesFilterObjectSchema } from './NestedEnumNotificationEventContentTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNotificationEventContentTypeFilterObjectSchema } from './NestedEnumNotificationEventContentTypeFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumNotificationEventContentTypeWithAggregatesFilter>;
export const EnumNotificationEventContentTypeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => NotificationEventContentTypeSchema).optional(), in: z.lazy(() => NotificationEventContentTypeSchema).array().optional(), notIn: z.lazy(() => NotificationEventContentTypeSchema).array().optional(), not: z.union([z.lazy(() => NotificationEventContentTypeSchema),
    z.lazy(() => NestedEnumNotificationEventContentTypeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumNotificationEventContentTypeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumNotificationEventContentTypeFilterObjectSchema).optional()
}).strict() as SchemaType;
