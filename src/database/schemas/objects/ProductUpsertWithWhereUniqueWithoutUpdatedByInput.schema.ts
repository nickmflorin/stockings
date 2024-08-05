/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutUpdatedByInputObjectSchema } from './ProductUpdateWithoutUpdatedByInput.schema';
import { ProductUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProductUncheckedUpdateWithoutUpdatedByInput.schema';
import { ProductCreateWithoutUpdatedByInputObjectSchema } from './ProductCreateWithoutUpdatedByInput.schema';
import { ProductUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const ProductUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
