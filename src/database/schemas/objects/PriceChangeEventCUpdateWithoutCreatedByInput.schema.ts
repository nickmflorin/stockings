/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventContentTypeFieldUpdateOperationsInput.schema';
import { PriceChangeEventCUpdateeventTypesInputObjectSchema } from './PriceChangeEventCUpdateeventTypesInput.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0NestedInput.schema';
import { ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_PriceChange_0NestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_PriceChange_0NestedInput.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_notificationEvents_PriceChangeEve_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_notificationEvents_PriceChangeEve_0NestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateWithoutCreatedByInput>;
export const PriceChangeEventCUpdateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventContentTypeSchema),
    z.lazy(() => EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), eventTypes: z.union([z.lazy(() => PriceChangeEventCUpdateeventTypesInputObjectSchema),
    z.lazy(() => PriceChangeEventTypeSchema).array()]).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0NestedInputObjectSchema).optional(), product: z.lazy(() => ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_PriceChange_0NestedInputObjectSchema).optional(), user: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_notificationEvents_PriceChangeEve_0NestedInputObjectSchema).optional()
}).strict() as SchemaType;
