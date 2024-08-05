/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutProductInputObjectSchema } from './ProductRecordCreateWithoutProductInput.schema';
import { ProductRecordUncheckedCreateWithoutProductInputObjectSchema } from './ProductRecordUncheckedCreateWithoutProductInput.schema';
import { ProductRecordCreateOrConnectWithoutProductInputObjectSchema } from './ProductRecordCreateOrConnectWithoutProductInput.schema';
import { ProductRecordUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductRecordUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductRecordCreateManyProductInputEnvelopeObjectSchema } from './ProductRecordCreateManyProductInputEnvelope.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductRecordUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductRecordUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductRecordUpdateManyWithWhereWithoutProductInput.schema';
import { ProductRecordScalarWhereInputObjectSchema } from './ProductRecordScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUncheckedUpdateManyWithoutProductNestedInput>;
export const ProductRecordUncheckedUpdateManyWithoutProductNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => ProductRecordUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductRecordUpsertWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordCreateManyProductInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductRecordUpdateWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductRecordUpdateManyWithWhereWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductRecordScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
