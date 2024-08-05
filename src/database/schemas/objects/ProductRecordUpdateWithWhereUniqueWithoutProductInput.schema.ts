/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithoutProductInputObjectSchema } from './ProductRecordUpdateWithoutProductInput.schema';
import { ProductRecordUncheckedUpdateWithoutProductInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateWithWhereUniqueWithoutProductInput>;
export const ProductRecordUpdateWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductRecordUpdateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
