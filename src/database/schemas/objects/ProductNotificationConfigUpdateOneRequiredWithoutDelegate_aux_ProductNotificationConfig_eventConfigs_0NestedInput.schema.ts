/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUpsertWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUpsertWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0NestedInput>;
export const ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0NestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema).optional(), upsert: z.lazy(() => ProductNotificationConfigUpsertWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema).optional(), connect: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductNotificationConfigUpdateToOneWithWhereWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)]).optional()
}).strict() as SchemaType;
