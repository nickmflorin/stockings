/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorWhereUniqueInputObjectSchema } from './ProductRecordErrorWhereUniqueInput.schema';
import { ProductRecordErrorUpdateWithoutRecordInputObjectSchema } from './ProductRecordErrorUpdateWithoutRecordInput.schema';
import { ProductRecordErrorUncheckedUpdateWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedUpdateWithoutRecordInput.schema';
import { ProductRecordErrorCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateWithoutRecordInput.schema';
import { ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedCreateWithoutRecordInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput>;
export const ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductRecordErrorUpdateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedUpdateWithoutRecordInputObjectSchema)]), create: z.union([z.lazy(() => ProductRecordErrorCreateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema)])
}).strict() as SchemaType;
