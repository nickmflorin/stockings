/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereInputObjectSchema } from './ProductRecordWhereInput.schema';
import { ProductRecordUpdateWithoutErrorsInputObjectSchema } from './ProductRecordUpdateWithoutErrorsInput.schema';
import { ProductRecordUncheckedUpdateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutErrorsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateToOneWithWhereWithoutErrorsInput>;
export const ProductRecordUpdateToOneWithWhereWithoutErrorsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductRecordUpdateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutErrorsInputObjectSchema)])
}).strict() as SchemaType;
