/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCreatedByInputObjectSchema } from './ProductUpdateWithoutCreatedByInput.schema';
import { ProductUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProductUncheckedUpdateWithoutCreatedByInput.schema';
import { ProductCreateWithoutCreatedByInputObjectSchema } from './ProductCreateWithoutCreatedByInput.schema';
import { ProductUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCreatedByInput>;
export const ProductUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
