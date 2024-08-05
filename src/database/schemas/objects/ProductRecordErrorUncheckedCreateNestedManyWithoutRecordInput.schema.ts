/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateWithoutRecordInput.schema';
import { ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedCreateWithoutRecordInput.schema';
import { ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateOrConnectWithoutRecordInput.schema';
import { ProductRecordErrorCreateManyRecordInputEnvelopeObjectSchema } from './ProductRecordErrorCreateManyRecordInputEnvelope.schema';
import { ProductRecordErrorWhereUniqueInputObjectSchema } from './ProductRecordErrorWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput>;
export const ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordErrorCreateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorCreateWithoutRecordInputObjectSchema).array(),
    z.lazy(() => ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorUncheckedCreateWithoutRecordInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorCreateOrConnectWithoutRecordInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordErrorCreateManyRecordInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
