/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigSelectObjectSchema } from './PriceChangeEventConfigSelect.schema';
import { PriceChangeEventConfigIncludeObjectSchema } from './PriceChangeEventConfigInclude.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigArgs>;
export const PriceChangeEventConfigArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema).optional(), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema).optional()
}).strict() as SchemaType;
