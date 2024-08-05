/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCreatedProductNotificationConfigsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreatedProductNotificationConfigsNestedInput.schema';
import { UserUpdateOneRequiredWithoutUpdatedProductNotificationConfigsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUpdatedProductNotificationConfigsNestedInput.schema';
import { UserUpdateOneRequiredWithoutProductNotificationConfigsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProductNotificationConfigsNestedInput.schema';
import { NotificationEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './NotificationEventConfigUpdateManyWithoutProductNotificationConfigNestedInput.schema';
import { PriceChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './PriceChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInput.schema';
import { StatusChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './StatusChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateWithoutProductInput>;
export const ProductNotificationConfigUpdateWithoutProductInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedProductNotificationConfigsNestedInputObjectSchema).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedProductNotificationConfigsNestedInputObjectSchema).optional(), user: z.lazy(() => UserUpdateOneRequiredWithoutProductNotificationConfigsNestedInputObjectSchema).optional(), eventConfigs: z.lazy(() => NotificationEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional()
}).strict() as SchemaType;
