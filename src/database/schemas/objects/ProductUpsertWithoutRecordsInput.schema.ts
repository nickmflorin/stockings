/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateWithoutRecordsInputObjectSchema } from './ProductUpdateWithoutRecordsInput.schema';
import { ProductUncheckedUpdateWithoutRecordsInputObjectSchema } from './ProductUncheckedUpdateWithoutRecordsInput.schema';
import { ProductCreateWithoutRecordsInputObjectSchema } from './ProductCreateWithoutRecordsInput.schema';
import { ProductUncheckedCreateWithoutRecordsInputObjectSchema } from './ProductUncheckedCreateWithoutRecordsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithoutRecordsInput>;
export const ProductUpsertWithoutRecordsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutRecordsInputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutRecordsInputObjectSchema)]), where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
