/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { PriceChangeEventCUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PriceChangeEventCUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0Input>;
export const UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), clerkId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), profileImageUrl: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), emailAddress: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdNotificationEvents: z.lazy(() => NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedNotificationEvents: z.lazy(() => NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.lazy(() => PriceChangeEventCUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict() as SchemaType;
