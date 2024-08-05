/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutErrorsInputObjectSchema } from './ProductRecordCreateWithoutErrorsInput.schema';
import { ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedCreateWithoutErrorsInput.schema';
import { ProductRecordCreateOrConnectWithoutErrorsInputObjectSchema } from './ProductRecordCreateOrConnectWithoutErrorsInput.schema';
import { ProductRecordUpsertWithoutErrorsInputObjectSchema } from './ProductRecordUpsertWithoutErrorsInput.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateToOneWithWhereWithoutErrorsInputObjectSchema } from './ProductRecordUpdateToOneWithWhereWithoutErrorsInput.schema';
import { ProductRecordUpdateWithoutErrorsInputObjectSchema } from './ProductRecordUpdateWithoutErrorsInput.schema';
import { ProductRecordUncheckedUpdateWithoutErrorsInputObjectSchema } from './ProductRecordUncheckedUpdateWithoutErrorsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateOneRequiredWithoutErrorsNestedInput>;
export const ProductRecordUpdateOneRequiredWithoutErrorsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutErrorsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductRecordCreateOrConnectWithoutErrorsInputObjectSchema).optional(), upsert: z.lazy(() => ProductRecordUpsertWithoutErrorsInputObjectSchema).optional(), connect: z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductRecordUpdateToOneWithWhereWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUpdateWithoutErrorsInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedUpdateWithoutErrorsInputObjectSchema)]).optional()
}).strict() as SchemaType;
