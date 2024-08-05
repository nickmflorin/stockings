/* eslint-disable */
import { z } from 'zod';
import { InvalidAttributeErrorDataSelectObjectSchema } from './InvalidAttributeErrorDataSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.InvalidAttributeErrorDataArgs>;
export const InvalidAttributeErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
