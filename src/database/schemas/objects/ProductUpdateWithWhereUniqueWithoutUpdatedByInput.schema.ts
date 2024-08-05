/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutUpdatedByInputObjectSchema } from './ProductUpdateWithoutUpdatedByInput.schema';
import { ProductUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProductUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const ProductUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
