/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithoutProductInputObjectSchema } from './ProductRecordUpdateWithoutProductInput.schema';
import { ProductRecordUncheckedUpdateWithoutProductInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutProductInput.schema';
import { ProductRecordCreateWithoutProductInputObjectSchema } from './ProductRecordCreateWithoutProductInput.schema';
import { ProductRecordUncheckedCreateWithoutProductInputObjectSchema } from './ProductRecordUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpsertWithWhereUniqueWithoutProductInput>;
export const ProductRecordUpsertWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductRecordUpdateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutProductInputObjectSchema)]), create: z.union([z.lazy(() => ProductRecordCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
