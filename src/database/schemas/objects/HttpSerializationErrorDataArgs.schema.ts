/* eslint-disable */
import { z } from 'zod';
import { HttpSerializationErrorDataSelectObjectSchema } from './HttpSerializationErrorDataSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataArgs>;
export const HttpSerializationErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
