/* eslint-disable */
import { z } from 'zod';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ProductUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutUpdatedByInput>;
export const ProductUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
