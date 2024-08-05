/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedCreateWithoutUpdatedByInput.schema';
import { ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateOrConnectWithoutUpdatedByInput.schema';
import { ProductRecordCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProductRecordCreateManyUpdatedByInputEnvelope.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from './ProductRecordWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateNestedManyWithoutUpdatedByInput>;
export const ProductRecordCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductRecordCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductRecordCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductRecordWhereUniqueInputObjectSchema),
    z.lazy(() => ProductRecordWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
