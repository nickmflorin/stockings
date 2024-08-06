/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventSelectObjectSchema } from './StatusChangeEventSelect.schema';
import { StatusChangeEventIncludeObjectSchema } from './StatusChangeEventInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventArgs>;
export const StatusChangeEventArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => StatusChangeEventSelectObjectSchema).optional(), include: z.lazy(() => StatusChangeEventIncludeObjectSchema).optional()
}).strict() as SchemaType;
