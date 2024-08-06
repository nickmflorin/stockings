/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { StatusChangeEventCreateeventTypesInputObjectSchema } from './StatusChangeEventCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEvents_StatusC_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEvents_StatusC_0Input.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_StatusChangeEv_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_StatusChangeEv_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateWithoutProductInput>;
export const StatusChangeEventCreateWithoutProductInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), createdBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEvents_StatusC_0InputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_StatusChangeEv_0InputObjectSchema)
}).strict() as SchemaType;
