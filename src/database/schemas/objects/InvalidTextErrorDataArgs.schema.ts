/* eslint-disable */
import { z } from 'zod';
import { InvalidTextErrorDataSelectObjectSchema } from './InvalidTextErrorDataSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataArgs>;
export const InvalidTextErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
