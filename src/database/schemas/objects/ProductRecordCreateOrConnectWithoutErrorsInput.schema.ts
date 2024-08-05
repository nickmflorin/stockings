/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordCreateWithoutErrorsInputObjectSchema } from './ProductRecordCreateWithoutErrorsInput.schema';
import { ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedCreateWithoutErrorsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateOrConnectWithoutErrorsInput>;
export const ProductRecordCreateOrConnectWithoutErrorsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductRecordCreateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema)])
}).strict() as SchemaType;
