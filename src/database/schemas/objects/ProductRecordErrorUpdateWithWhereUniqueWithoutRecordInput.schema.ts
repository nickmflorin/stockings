/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorWhereUniqueInputObjectSchema } from './ProductRecordErrorWhereUniqueInput.schema';
import { ProductRecordErrorUpdateWithoutRecordInputObjectSchema } from './ProductRecordErrorUpdateWithoutRecordInput.schema';
import { ProductRecordErrorUncheckedUpdateWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedUpdateWithoutRecordInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput>;
export const ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductRecordErrorUpdateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedUpdateWithoutRecordInputObjectSchema)])
}).strict() as SchemaType;
