/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input>;
export const ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)])
}).strict() as SchemaType;
