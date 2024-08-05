/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorWhereUniqueInputObjectSchema } from './ProductRecordErrorWhereUniqueInput.schema';
import { ProductRecordErrorCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateWithoutRecordInput.schema';
import { ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedCreateWithoutRecordInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorCreateOrConnectWithoutRecordInput>;
export const ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductRecordErrorCreateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema)])
}).strict() as SchemaType;
