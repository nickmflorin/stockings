/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { PriceChangeEventConfigCreateeventTypesInputObjectSchema } from './PriceChangeEventConfigCreateeventTypesInput.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEventConfigs_P_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEventConfigs_P_0Input.schema';
import { ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema } from './ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0Input.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateInput>;
export const PriceChangeEventConfigCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), eventTypes: z.union([z.lazy(() => PriceChangeEventConfigCreateeventTypesInputObjectSchema),
    z.lazy(() => PriceChangeEventTypeSchema).array()]).optional(), createdBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEventConfigs_P_0InputObjectSchema), productNotificationConfig: z.lazy(() => ProductNotificationConfigCreateNestedOneWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_0InputObjectSchema)
}).strict() as SchemaType;
