/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorScalarWhereInputObjectSchema } from './ProductRecordErrorScalarWhereInput.schema';
import { ProductRecordErrorUpdateManyMutationInputObjectSchema } from './ProductRecordErrorUpdateManyMutationInput.schema';
import { ProductRecordErrorUncheckedUpdateManyWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedUpdateManyWithoutRecordInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUpdateManyWithWhereWithoutRecordInput>;
export const ProductRecordErrorUpdateManyWithWhereWithoutRecordInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductRecordErrorUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedUpdateManyWithoutRecordInputObjectSchema)])
}).strict() as SchemaType;
