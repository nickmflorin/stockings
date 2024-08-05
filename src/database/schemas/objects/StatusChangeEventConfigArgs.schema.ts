/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigSelectObjectSchema } from './StatusChangeEventConfigSelect.schema';
import { StatusChangeEventConfigIncludeObjectSchema } from './StatusChangeEventConfigInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigArgs>;
export const StatusChangeEventConfigArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema).optional(), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema).optional()
}).strict() as SchemaType;
