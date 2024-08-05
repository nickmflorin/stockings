/* eslint-disable */
import { z } from 'zod';
import { ProductRecordScalarWhereInputObjectSchema } from './ProductRecordScalarWhereInput.schema';
import { ProductRecordUpdateManyMutationInputObjectSchema } from './ProductRecordUpdateManyMutationInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateManyWithWhereWithoutProductInput>;
export const ProductRecordUpdateManyWithWhereWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ProductRecordUpdateManyMutationInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
