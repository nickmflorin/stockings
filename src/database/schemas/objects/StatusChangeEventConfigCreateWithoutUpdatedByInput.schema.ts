/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { StatusChangeEventConfigCreateeventTypesInputObjectSchema } from './StatusChangeEventConfigCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0Input.schema';
import { ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema } from './ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateWithoutUpdatedByInput>;
export const StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventConfigCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional(), createdBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema), productNotificationConfig: z.lazy(() => ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema)
}).strict() as SchemaType;
