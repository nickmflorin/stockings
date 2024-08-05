/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutCreatedByInputObjectSchema } from './ProductCreateWithoutCreatedByInput.schema';
import { ProductUncheckedCreateWithoutCreatedByInputObjectSchema } from './ProductUncheckedCreateWithoutCreatedByInput.schema';
import { ProductCreateOrConnectWithoutCreatedByInputObjectSchema } from './ProductCreateOrConnectWithoutCreatedByInput.schema';
import { ProductCreateManyCreatedByInputEnvelopeObjectSchema } from './ProductCreateManyCreatedByInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCreatedByInput>;
export const ProductUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => ProductUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => ProductCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
