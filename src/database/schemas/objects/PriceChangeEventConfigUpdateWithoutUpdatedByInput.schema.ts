/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventConfigContentTypeFieldUpdateOperationsInput.schema';
import { PriceChangeEventConfigUpdateeventTypesInputObjectSchema } from './PriceChangeEventConfigUpdateeventTypesInput.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0NestedInput.schema';
import { ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0NestedInputObjectSchema } from './ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0NestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateWithoutUpdatedByInput>;
export const PriceChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), eventTypes: z.union([z.lazy(() => PriceChangeEventConfigUpdateeventTypesInputObjectSchema),
    z.lazy(() => PriceChangeEventTypeSchema).array()]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0NestedInputObjectSchema).optional(), productNotificationConfig: z.lazy(() => ProductNotificationConfigUpdateOneRequiredWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0NestedInputObjectSchema).optional()
}).strict() as SchemaType;
