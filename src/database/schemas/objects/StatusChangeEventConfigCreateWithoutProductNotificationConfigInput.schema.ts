/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { StatusChangeEventConfigCreateeventTypesInputObjectSchema } from './StatusChangeEventConfigCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0Input.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventConfigCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), createdBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEventConfigs_S_0InputObjectSchema)
}).strict() as SchemaType;
