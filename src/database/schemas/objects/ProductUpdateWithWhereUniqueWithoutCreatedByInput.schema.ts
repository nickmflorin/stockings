/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCreatedByInputObjectSchema } from './ProductUpdateWithoutCreatedByInput.schema';
import { ProductUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProductUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCreatedByInput>;
export const ProductUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
