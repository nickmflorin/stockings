/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumProductStatusNullableListFilter>;
export const EnumProductStatusNullableListFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => ProductStatusSchema).array(),
    z.null()]).optional().nullable(), has: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), hasEvery: z.lazy(() => ProductStatusSchema).array().optional(), hasSome: z.lazy(() => ProductStatusSchema).array().optional(), isEmpty: z.boolean().optional()
}).strict() as SchemaType;
