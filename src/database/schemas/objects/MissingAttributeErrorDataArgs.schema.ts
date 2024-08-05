/* eslint-disable */
import { z } from 'zod';
import { MissingAttributeErrorDataSelectObjectSchema } from './MissingAttributeErrorDataSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataArgs>;
export const MissingAttributeErrorDataArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema).optional()
}).strict() as SchemaType;
