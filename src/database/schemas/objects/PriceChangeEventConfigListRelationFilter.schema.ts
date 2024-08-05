/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereInputObjectSchema } from './PriceChangeEventConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigListRelationFilter>;
export const PriceChangeEventConfigListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema).optional(), some: z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema).optional(), none: z.lazy(() => PriceChangeEventConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
