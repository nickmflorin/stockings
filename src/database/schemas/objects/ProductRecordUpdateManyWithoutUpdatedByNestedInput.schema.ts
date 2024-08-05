/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutUpdatedByInput.schema';
import { ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateOrConnectWithoutUpdatedByInput.schema';
import { ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProductRecordCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProductRecordCreateManyUpdatedByInputEnvelope.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';
import { ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProductRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ProductRecordUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ProductRecordScalarWhereInputObjectSchema } from './ProductRecordScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateManyWithoutUpdatedByNestedInput>;
export const ProductRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductRecordScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
