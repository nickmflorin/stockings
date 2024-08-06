/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereInputObjectSchema } from './PriceChangeEventCWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCListRelationFilter>;
export const PriceChangeEventCListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => PriceChangeEventCWhereInputObjectSchema).optional(), some: z.lazy(() => PriceChangeEventCWhereInputObjectSchema).optional(), none: z.lazy(() => PriceChangeEventCWhereInputObjectSchema).optional()
}).strict() as SchemaType;
