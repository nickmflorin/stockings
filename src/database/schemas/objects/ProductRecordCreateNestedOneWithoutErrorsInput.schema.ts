/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutErrorsInputObjectSchema } from './ProductRecordCreateWithoutErrorsInput.schema';
import { ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedCreateWithoutErrorsInput.schema';
import { ProductRecordCreateOrConnectWithoutErrorsInputObjectSchema } from './ProductRecordCreateOrConnectWithoutErrorsInput.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateNestedOneWithoutErrorsInput>;
export const ProductRecordCreateNestedOneWithoutErrorsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductRecordCreateOrConnectWithoutErrorsInputObjectSchema).optional(), connect: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
