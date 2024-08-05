/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';
import { ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input>;
export const ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)])
}).strict() as SchemaType;
