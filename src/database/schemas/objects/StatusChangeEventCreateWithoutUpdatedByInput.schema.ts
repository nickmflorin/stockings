/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { StatusChangeEventCreateeventTypesInputObjectSchema } from './StatusChangeEventCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema } from './ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_StatusChang_0Input.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_StatusChangeEv_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_StatusChangeEv_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateWithoutUpdatedByInput>;
export const StatusChangeEventCreateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), createdBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_StatusChang_0InputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_StatusChangeEv_0InputObjectSchema)
}).strict() as SchemaType;
