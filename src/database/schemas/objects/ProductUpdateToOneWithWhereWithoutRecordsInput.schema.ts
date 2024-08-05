/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutRecordsInputObjectSchema } from './ProductUpdateWithoutRecordsInput.schema';
import { ProductUncheckedUpdateWithoutRecordsInputObjectSchema } from './ProductUncheckedUpdateWithoutRecordsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutRecordsInput>;
export const ProductUpdateToOneWithWhereWithoutRecordsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductUpdateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutRecordsInputObjectSchema)])
}).strict() as SchemaType;
