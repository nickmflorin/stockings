/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordCreateWithoutCreatedByInputObjectSchema } from './ProductRecordCreateWithoutCreatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateOrConnectWithoutCreatedByInput>;
export const ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductRecordCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
