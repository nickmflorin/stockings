/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventContentTypeFieldUpdateOperationsInput.schema';
import { StatusChangeEventUpdateeventTypesInputObjectSchema } from './StatusChangeEventUpdateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0NestedInput.schema';
import { UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEvents_StatusC_0NestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEvents_StatusC_0NestedInput.schema';
import { ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_StatusChang_0NestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_StatusChang_0NestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateWithoutUserInput>;
export const StatusChangeEventUpdateWithoutUserInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventContentTypeSchema),
    z.lazy(() => EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), eventTypes: z.union([z.lazy(() => StatusChangeEventUpdateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0NestedInputObjectSchema).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutDelegate_aux_User_updatedNotificationEvents_StatusC_0NestedInputObjectSchema).optional(), product: z.lazy(() => ProductUpdateOneRequiredWithoutDelegate_aux_Product_notificationEvents_StatusChang_0NestedInputObjectSchema).optional()
}).strict() as SchemaType;
