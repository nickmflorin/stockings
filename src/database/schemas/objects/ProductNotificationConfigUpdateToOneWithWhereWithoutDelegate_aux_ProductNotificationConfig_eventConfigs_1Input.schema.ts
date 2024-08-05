/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';
import { ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema } from './ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input>;
export const ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema)])
}).strict() as SchemaType;
