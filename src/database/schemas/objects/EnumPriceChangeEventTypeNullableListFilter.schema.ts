/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumPriceChangeEventTypeNullableListFilter>;
export const EnumPriceChangeEventTypeNullableListFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => PriceChangeEventTypeSchema).array(),
    z.null()]).optional().nullable(), has: z.union([z.lazy(() => PriceChangeEventTypeSchema),
    z.null()]).optional().nullable(), hasEvery: z.lazy(() => PriceChangeEventTypeSchema).array().optional(), hasSome: z.lazy(() => PriceChangeEventTypeSchema).array().optional(), isEmpty: z.boolean().optional()
}).strict() as SchemaType;
