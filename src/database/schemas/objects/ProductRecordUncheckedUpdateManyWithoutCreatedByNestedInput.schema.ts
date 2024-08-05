/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutCreatedByInputObjectSchema } from './ProductRecordCreateWithoutCreatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutCreatedByInput.schema';
import { ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProductRecordCreateOrConnectWithoutCreatedByInput.schema';
import { ProductRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ProductRecordCreateManyCreatedByInputEnvelopeObjectSchema } from './ProductRecordCreateManyCreatedByInputEnvelope.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ProductRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ProductRecordUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ProductRecordScalarWhereInputObjectSchema } from './ProductRecordScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductRecordScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
