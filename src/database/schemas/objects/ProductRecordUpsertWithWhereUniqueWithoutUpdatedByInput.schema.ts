/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithoutUpdatedByInputObjectSchema } from './ProductRecordUpdateWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutUpdatedByInput.schema';
import { ProductRecordCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductRecordUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => ProductRecordCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
