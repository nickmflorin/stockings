/* eslint-disable */
import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProductUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationEventUncheckedCreateNestedManyWithoutUserInput.schema';
import { PriceChangeEventCUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedCreateNestedManyWithoutUserInput.schema';
import { StatusChangeEventUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0Input>;
export const UserUncheckedCreateWithoutDelegate_aux_User_updatedNotificationEvents_PriceCh_0InputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), clerkId: z.string(), firstName: z.string(), lastName: z.string(), profileImageUrl: z.union([z.string(),
    z.null()]).optional().nullable(), emailAddress: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), createdNotificationEvents: z.lazy(() => NotificationEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedNotificationEvents: z.lazy(() => NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.lazy(() => PriceChangeEventCUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.lazy(() => StatusChangeEventUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict() as SchemaType;
