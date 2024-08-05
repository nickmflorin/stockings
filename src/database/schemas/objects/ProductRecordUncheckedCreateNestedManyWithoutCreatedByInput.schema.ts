/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutCreatedByInputObjectSchema } from './ProductRecordCreateWithoutCreatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutCreatedByInput.schema';
import { ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProductRecordCreateOrConnectWithoutCreatedByInput.schema';
import { ProductRecordCreateManyCreatedByInputEnvelopeObjectSchema } from './ProductRecordCreateManyCreatedByInputEnvelope.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput>;
export const ProductRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
