/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateWithoutRecordInput.schema';
import { ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedCreateWithoutRecordInput.schema';
import { ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateOrConnectWithoutRecordInput.schema';
import { ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInputObjectSchema } from './ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput.schema';
import { ProductRecordErrorCreateManyRecordInputEnvelopeObjectSchema } from './ProductRecordErrorCreateManyRecordInputEnvelope.schema';
import { ProductRecordErrorWhereUniqueInputObjectSchema } from './ProductRecordErrorWhereUniqueInput.schema';
import { ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInputObjectSchema } from './ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput.schema';
import { ProductRecordErrorUpdateManyWithWhereWithoutRecordInputObjectSchema } from './ProductRecordErrorUpdateManyWithWhereWithoutRecordInput.schema';
import { ProductRecordErrorScalarWhereInputObjectSchema } from './ProductRecordErrorScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput>;
export const ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordErrorCreateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorCreateWithoutRecordInputObjectSchema).array(),
    z.lazy(() => ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordErrorCreateManyRecordInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductRecordErrorUpdateManyWithWhereWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUpdateManyWithWhereWithoutRecordInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
