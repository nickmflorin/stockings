/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutCreatedByInputObjectSchema } from './ProductCreateWithoutCreatedByInput.schema';
import { ProductUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutCreatedByInput>;
export const ProductCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
