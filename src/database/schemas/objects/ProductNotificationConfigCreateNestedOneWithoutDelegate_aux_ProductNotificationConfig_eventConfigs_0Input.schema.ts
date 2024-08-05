/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input>;
export const ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema).optional(), connect: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
