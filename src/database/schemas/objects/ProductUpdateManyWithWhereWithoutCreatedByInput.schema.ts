/* eslint-disable */
import { z } from 'zod';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCreatedByInput>;
export const ProductUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
