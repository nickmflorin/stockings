/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigCreateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutEventConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateOrConnectWithoutEventConfigsInput>;
export const ProductNotificationConfigCreateOrConnectWithoutEventConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutEventConfigsInputObjectSchema)])
}).strict() as SchemaType;
