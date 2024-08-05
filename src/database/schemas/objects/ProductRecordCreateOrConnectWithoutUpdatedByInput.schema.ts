/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateOrConnectWithoutUpdatedByInput>;
export const ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductRecordCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
