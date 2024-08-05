/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateOrConnectWithoutUserInput>;
export const ProductNotificationConfigCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
