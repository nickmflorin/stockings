/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutRecordsInputObjectSchema } from './ProductCreateWithoutRecordsInput.schema';
import { ProductUncheckedCreateWithoutRecordsInputObjectSchema } from './ProductUncheckedCreateWithoutRecordsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutRecordsInput>;
export const ProductCreateOrConnectWithoutRecordsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutRecordsInputObjectSchema)])
}).strict() as SchemaType;
