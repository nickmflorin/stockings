/* eslint-disable */
import { z } from 'zod';
import { ProductRecordScalarWhereInputObjectSchema } from './ProductRecordScalarWhereInput.schema';
import { ProductRecordUpdateManyMutationInputObjectSchema } from './ProductRecordUpdateManyMutationInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateManyWithWhereWithoutUpdatedByInput>;
export const ProductRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductRecordUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
