/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { ProductNotificationConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyUpdatedByInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const ProductNotificationConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
