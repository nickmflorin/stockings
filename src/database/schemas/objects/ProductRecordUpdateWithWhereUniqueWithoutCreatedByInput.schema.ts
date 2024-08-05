/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithoutCreatedByInputObjectSchema } from './ProductRecordUpdateWithoutCreatedByInput.schema';
import { ProductRecordUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput>;
export const ProductRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductRecordUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
