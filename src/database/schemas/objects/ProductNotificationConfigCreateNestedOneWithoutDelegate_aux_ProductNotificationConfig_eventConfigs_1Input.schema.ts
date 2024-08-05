/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema } from './ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input.schema';
import { ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input.schema';
import { ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema } from './ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input>;
export const ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductNotificationConfigCreateOrConnectWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema).optional(), connect: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
