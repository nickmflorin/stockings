/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventConfigContentTypeFieldUpdateOperationsInput.schema';
import { StatusChangeEventConfigUpdateeventTypesInputObjectSchema } from './StatusChangeEventConfigUpdateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0NestedInput.schema';
import { ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1NestedInputObjectSchema } from './ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1NestedInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateWithoutCreatedByInput>;
export const StatusChangeEventConfigUpdateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), eventTypes: z.union([z.lazy(() => StatusChangeEventConfigUpdateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0NestedInputObjectSchema).optional(), productNotificationConfig: z.lazy(() => ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1NestedInputObjectSchema).optional()
}).strict() as SchemaType;
