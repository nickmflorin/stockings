/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutUpdatedByInputObjectSchema } from './ProductCreateWithoutUpdatedByInput.schema';
import { ProductUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductUncheckedCreateWithoutUpdatedByInput.schema';
import { ProductCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProductCreateOrConnectWithoutUpdatedByInput.schema';
import { ProductUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProductCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProductCreateManyUpdatedByInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ProductUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ProductUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const ProductUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => ProductUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema),
    z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
