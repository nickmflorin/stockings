/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { NotificationEventConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './NotificationEventConfigUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { NotificationEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './NotificationEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), clerkId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), profileImageUrl: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), emailAddress: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), productNotificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), createdProductNotificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProductNotificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdNotificationEventConfigs: z.lazy(() => NotificationEventConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedNotificationEventConfigs: z.lazy(() => NotificationEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional()
}).strict() as SchemaType;
