/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NestedEnumNotificationEventConfigContentTypeFilter>;
export const NestedEnumNotificationEventConfigContentTypeFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => NotificationEventConfigContentTypeSchema).optional(), in: z.lazy(() => NotificationEventConfigContentTypeSchema).array().optional(), notIn: z.lazy(() => NotificationEventConfigContentTypeSchema).array().optional(), not: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => NestedEnumNotificationEventConfigContentTypeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
