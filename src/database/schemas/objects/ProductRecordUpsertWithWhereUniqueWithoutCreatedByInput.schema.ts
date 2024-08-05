/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithoutCreatedByInputObjectSchema } from './ProductRecordUpdateWithoutCreatedByInput.schema';
import { ProductRecordUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutCreatedByInput.schema';
import { ProductRecordCreateWithoutCreatedByInputObjectSchema } from './ProductRecordCreateWithoutCreatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput>;
export const ProductRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductRecordUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => ProductRecordCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
