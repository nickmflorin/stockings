/* eslint-disable */
import { z } from 'zod';
import { NonUniqueTextErrorDataSelectObjectSchema } from './NonUniqueTextErrorDataSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataArgs>;
export const NonUniqueTextErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
