/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutUpdatedByInputObjectSchema } from './ProductCreateWithoutUpdatedByInput.schema';
import { ProductUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductUncheckedCreateWithoutUpdatedByInput.schema';
import { ProductCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProductCreateOrConnectWithoutUpdatedByInput.schema';
import { ProductCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProductCreateManyUpdatedByInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductCreateNestedManyWithoutUpdatedByInput>;
export const ProductCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => ProductUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema),
    z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
