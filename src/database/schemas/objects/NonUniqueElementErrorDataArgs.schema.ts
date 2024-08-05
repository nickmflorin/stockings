/* eslint-disable */
import { z } from 'zod';
import { NonUniqueElementErrorDataSelectObjectSchema } from './NonUniqueElementErrorDataSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataArgs>;
export const NonUniqueElementErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
