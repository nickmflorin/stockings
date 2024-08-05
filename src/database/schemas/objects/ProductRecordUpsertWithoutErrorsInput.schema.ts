/* eslint-disable */
import { z } from 'zod';
import { ProductRecordUpdateWithoutErrorsInputObjectSchema } from './ProductRecordUpdateWithoutErrorsInput.schema';
import { ProductRecordUncheckedUpdateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutErrorsInput.schema';
import { ProductRecordCreateWithoutErrorsInputObjectSchema } from './ProductRecordCreateWithoutErrorsInput.schema';
import { ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedCreateWithoutErrorsInput.schema';
import { ProductRecordWhereInputObjectSchema } from './ProductRecordWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpsertWithoutErrorsInput>;
export const ProductRecordUpsertWithoutErrorsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductRecordUpdateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutErrorsInputObjectSchema)]), create: z.union([z.lazy(() => ProductRecordCreateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema)]), where: z.lazy(() => ProductRecordWhereInputObjectSchema).optional()
}).strict() as SchemaType;
