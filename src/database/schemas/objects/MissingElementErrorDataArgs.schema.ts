/* eslint-disable */
import { z } from 'zod';
import { MissingElementErrorDataSelectObjectSchema } from './MissingElementErrorDataSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataArgs>;
export const MissingElementErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => MissingElementErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
