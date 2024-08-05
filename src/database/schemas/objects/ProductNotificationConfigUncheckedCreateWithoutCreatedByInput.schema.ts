/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedCreateWithoutCreatedByInput>;
export const ProductNotificationConfigUncheckedCreateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), productId: z.string(), userId: z.string(), eventConfigs: z.lazy(() => NotificationEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional()
}).strict() as SchemaType;
