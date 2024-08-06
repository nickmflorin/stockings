/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { NestedEnumNotificationEventContentTypeFilterObjectSchema } from './NestedEnumNotificationEventContentTypeFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumNotificationEventContentTypeFilter>;
export const EnumNotificationEventContentTypeFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => NotificationEventContentTypeSchema).optional(), in: z.lazy(() => NotificationEventContentTypeSchema).array().optional(), notIn: z.lazy(() => NotificationEventContentTypeSchema).array().optional(), not: z.union([z.lazy(() => NotificationEventContentTypeSchema),
    z.lazy(() => NestedEnumNotificationEventContentTypeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
