/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutUpdatedByInputObjectSchema } from './ProductCreateWithoutUpdatedByInput.schema';
import { ProductUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutUpdatedByInput>;
export const ProductCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
