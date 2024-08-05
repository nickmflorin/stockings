/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpsertWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input>;
export const ProductNotificationConfigUpsertWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)]), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)]), where: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
