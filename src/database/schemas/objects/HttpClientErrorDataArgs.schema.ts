/* eslint-disable */
import { z } from 'zod';
import { HttpClientErrorDataSelectObjectSchema } from './HttpClientErrorDataSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataArgs>;
export const HttpClientErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => HttpClientErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
