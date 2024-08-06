/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductCreateNestedManyWithoutCreatedByInput.schema';
import { ProductRecordCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductRecordCreateNestedManyWithoutCreatedByInput.schema';
import { ProductRecordCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateNestedManyWithoutUpdatedByInput.schema';
import { NotificationEventCreateNestedManyWithoutCreatedByInputObjectSchema } from './NotificationEventCreateNestedManyWithoutCreatedByInput.schema';
import { NotificationEventCreateNestedManyWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateNestedManyWithoutUpdatedByInput.schema';
import { NotificationEventCreateNestedManyWithoutUserInputObjectSchema } from './NotificationEventCreateNestedManyWithoutUserInput.schema';
import { PriceChangeEventCCreateNestedManyWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateNestedManyWithoutCreatedByInput.schema';
import { StatusChangeEventCreateNestedManyWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateNestedManyWithoutCreatedByInput.schema';
import { PriceChangeEventCCreateNestedManyWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateNestedManyWithoutUpdatedByInput.schema';
import { StatusChangeEventCreateNestedManyWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateNestedManyWithoutUpdatedByInput.schema';
import { PriceChangeEventCCreateNestedManyWithoutUserInputObjectSchema } from './PriceChangeEventCCreateNestedManyWithoutUserInput.schema';
import { StatusChangeEventCreateNestedManyWithoutUserInputObjectSchema } from './StatusChangeEventCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateWithoutUpdatedProductsInput>;
export const UserCreateWithoutUpdatedProductsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), clerkId: z.string(), firstName: z.string(), lastName: z.string(), profileImageUrl: z.union([z.string(),
    z.null()]).optional().nullable(), emailAddress: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdProducts: z.lazy(() => ProductCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), createdNotificationEvents: z.lazy(() => NotificationEventCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedNotificationEvents: z.lazy(() => NotificationEventCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventCreateNestedManyWithoutUserInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.lazy(() => PriceChangeEventCCreateNestedManyWithoutUserInputObjectSchema).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.lazy(() => StatusChangeEventCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict() as SchemaType;
