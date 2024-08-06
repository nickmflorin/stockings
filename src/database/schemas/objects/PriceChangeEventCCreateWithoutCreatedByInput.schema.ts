/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { PriceChangeEventCCreateeventTypesInputObjectSchema } from './PriceChangeEventCCreateeventTypesInput.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0Input.schema';
import { ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema } from './ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_PriceChange_0Input.schema';
import { UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_PriceChangeEve_0InputObjectSchema } from './UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_PriceChangeEve_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateWithoutCreatedByInput>;
export const PriceChangeEventCCreateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), contentType: z.lazy(() => NotificationEventContentTypeSchema), eventTypes: z.union([z.lazy(() => PriceChangeEventCCreateeventTypesInputObjectSchema),
    z.lazy(() => PriceChangeEventTypeSchema).array()]).optional(), updatedBy: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0InputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutDelegate_aux_Product_notificationEvents_PriceChange_0InputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutDelegate_aux_User_notificationEvents_PriceChangeEve_0InputObjectSchema)
}).strict() as SchemaType;
