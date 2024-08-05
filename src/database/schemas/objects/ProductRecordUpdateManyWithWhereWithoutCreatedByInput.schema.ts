/* eslint-disable */
import { z } from 'zod';
import { ProductRecordScalarWhereInputObjectSchema } from './ProductRecordScalarWhereInput.schema';
import { ProductRecordUpdateManyMutationInputObjectSchema } from './ProductRecordUpdateManyMutationInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateManyWithWhereWithoutCreatedByInput>;
export const ProductRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductRecordUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
