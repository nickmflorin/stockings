/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCSelectObjectSchema } from './PriceChangeEventCSelect.schema';
import { PriceChangeEventCIncludeObjectSchema } from './PriceChangeEventCInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCArgs>;
export const PriceChangeEventCArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => PriceChangeEventCSelectObjectSchema).optional(), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema).optional()
}).strict() as SchemaType;
