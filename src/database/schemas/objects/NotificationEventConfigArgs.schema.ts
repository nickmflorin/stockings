/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigSelectObjectSchema } from './NotificationEventConfigSelect.schema';
import { NotificationEventConfigIncludeObjectSchema } from './NotificationEventConfigInclude.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigArgs>;
export const NotificationEventConfigArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => NotificationEventConfigSelectObjectSchema).optional(), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema).optional()
}).strict() as SchemaType;
