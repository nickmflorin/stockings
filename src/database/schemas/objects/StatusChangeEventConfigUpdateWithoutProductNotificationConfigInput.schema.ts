/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventConfigContentTypeFieldUpdateOperationsInput.schema';
import { StatusChangeEventConfigUpdateeventTypesInputObjectSchema } from './StatusChangeEventConfigUpdateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0NestedInput.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0NestedInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), eventTypes: z.union([z.lazy(() => StatusChangeEventConfigUpdateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0NestedInputObjectSchema).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0NestedInputObjectSchema).optional()
}).strict() as SchemaType;
