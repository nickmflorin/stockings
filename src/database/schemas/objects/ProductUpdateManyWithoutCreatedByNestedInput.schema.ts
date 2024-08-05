/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutCreatedByInputObjectSchema } from './ProductCreateWithoutCreatedByInput.schema';
import { ProductUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductUncheckedCreateWithoutCreatedByInput.schema';
import { ProductCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProductCreateOrConnectWithoutCreatedByInput.schema';
import { ProductUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ProductCreateManyCreatedByInputEnvelopeObjectSchema } from './ProductCreateManyCreatedByInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ProductUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ProductUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateManyWithoutCreatedByNestedInput>;
export const ProductUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => ProductUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ProductUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ProductUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ProductUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema),
    z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
