/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NullableEnumProductStatusFieldUpdateOperationsInput>;
export const NullableEnumProductStatusFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
