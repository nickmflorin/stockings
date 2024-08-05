/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithoutUpdatedByInputObjectSchema } from './ProductRecordUpdateWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductRecordUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
