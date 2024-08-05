/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutProductInputObjectSchema } from './ProductRecordCreateWithoutProductInput.schema';
import { ProductRecordUncheckedCreateWithoutProductInputObjectSchema } from './ProductRecordUncheckedCreateWithoutProductInput.schema';
import { ProductRecordCreateOrConnectWithoutProductInputObjectSchema } from './ProductRecordCreateOrConnectWithoutProductInput.schema';
import { ProductRecordCreateManyProductInputEnvelopeObjectSchema } from './ProductRecordCreateManyProductInputEnvelope.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUncheckedCreateNestedManyWithoutProductInput>;
export const ProductRecordUncheckedCreateNestedManyWithoutProductInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => ProductRecordUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => ProductRecordCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordCreateManyProductInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
