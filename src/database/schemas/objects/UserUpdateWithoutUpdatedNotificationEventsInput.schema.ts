/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProductRecordUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductRecordUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductRecordUpdateManyWithoutUpdatedByNestedInput.schema';
import { NotificationEventUpdateManyWithoutCreatedByNestedInputObjectSchema } from './NotificationEventUpdateManyWithoutCreatedByNestedInput.schema';
import { NotificationEventUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationEventUpdateManyWithoutUserNestedInput.schema';
import { PriceChangeEventCUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PriceChangeEventCUpdateManyWithoutCreatedByNestedInput.schema';
import { StatusChangeEventUpdateManyWithoutCreatedByNestedInputObjectSchema } from './StatusChangeEventUpdateManyWithoutCreatedByNestedInput.schema';
import { PriceChangeEventCUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './PriceChangeEventCUpdateManyWithoutUpdatedByNestedInput.schema';
import { StatusChangeEventUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './StatusChangeEventUpdateManyWithoutUpdatedByNestedInput.schema';
import { PriceChangeEventCUpdateManyWithoutUserNestedInputObjectSchema } from './PriceChangeEventCUpdateManyWithoutUserNestedInput.schema';
import { StatusChangeEventUpdateManyWithoutUserNestedInputObjectSchema } from './StatusChangeEventUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateWithoutUpdatedNotificationEventsInput>;
export const UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), clerkId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), profileImageUrl: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), emailAddress: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdProducts: z.lazy(() => ProductUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdNotificationEvents: z.lazy(() => NotificationEventUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventUpdateManyWithoutUserNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.lazy(() => PriceChangeEventCUpdateManyWithoutUserNestedInputObjectSchema).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.lazy(() => StatusChangeEventUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict() as SchemaType;
