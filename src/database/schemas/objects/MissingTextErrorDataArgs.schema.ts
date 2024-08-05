/* eslint-disable */
import { z } from 'zod';
import { MissingTextErrorDataSelectObjectSchema } from './MissingTextErrorDataSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingTextErrorDataArgs>;
export const MissingTextErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => MissingTextErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
