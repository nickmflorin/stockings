/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUserInput.schema';
import { ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutUserInput.schema';
import { ProductNotificationConfigCreateManyUserInputEnvelopeObjectSchema } from './ProductNotificationConfigCreateManyUserInputEnvelope.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedCreateNestedManyWithoutUserInput>;
export const ProductNotificationConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ProductNotificationConfigCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
