/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutRecordsInputObjectSchema } from './ProductCreateWithoutRecordsInput.schema';
import { ProductUncheckedCreateWithoutRecordsInputObjectSchema } from './ProductUncheckedCreateWithoutRecordsInput.schema';
import { ProductCreateOrConnectWithoutRecordsInputObjectSchema } from './ProductCreateOrConnectWithoutRecordsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductCreateNestedOneWithoutRecordsInput>;
export const ProductCreateNestedOneWithoutRecordsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutRecordsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRecordsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
