/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordCreateWithoutProductInputObjectSchema } from './ProductRecordCreateWithoutProductInput.schema';
import { ProductRecordUncheckedCreateWithoutProductInputObjectSchema } from './ProductRecordUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateOrConnectWithoutProductInput>;
export const ProductRecordCreateOrConnectWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductRecordCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
