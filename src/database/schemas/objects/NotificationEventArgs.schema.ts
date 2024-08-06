/* eslint-disable */
import { z } from 'zod';
import { NotificationEventSelectObjectSchema } from './NotificationEventSelect.schema';
import { NotificationEventIncludeObjectSchema } from './NotificationEventInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventArgs>;
export const NotificationEventArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => NotificationEventSelectObjectSchema).optional(), include: z.lazy(() => NotificationEventIncludeObjectSchema).optional()
}).strict() as SchemaType;
