/* eslint-disable */
import { z } from 'zod';
import { HttpNetworkErrorDataSelectObjectSchema } from './HttpNetworkErrorDataSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataArgs>;
export const HttpNetworkErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
