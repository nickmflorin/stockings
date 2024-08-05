/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProductRecordUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductRecordUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductRecordUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProductNotificationConfigUpdateManyWithoutUserNestedInputObjectSchema } from './ProductNotificationConfigUpdateManyWithoutUserNestedInput.schema';
import { ProductNotificationConfigUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProductNotificationConfigUpdateManyWithoutCreatedByNestedInput.schema';
import { ProductNotificationConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProductNotificationConfigUpdateManyWithoutUpdatedByNestedInput.schema';
import { NotificationEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema } from './NotificationEventConfigUpdateManyWithoutCreatedByNestedInput.schema';
import { NotificationEventConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './NotificationEventConfigUpdateManyWithoutUpdatedByNestedInput.schema';
import { PriceChangeEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PriceChangeEventConfigUpdateManyWithoutCreatedByNestedInput.schema';
import { StatusChangeEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema } from './StatusChangeEventConfigUpdateManyWithoutCreatedByNestedInput.schema';
import { StatusChangeEventConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './StatusChangeEventConfigUpdateManyWithoutUpdatedByNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateWithoutDelegate_aux_User_updatedNotificationEventConfigs_P_0Input>;
export const UserUpdateWithoutDelegate_aux_User_updatedNotificationEventConfigs_P_0InputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), clerkId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), profileImageUrl: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), emailAddress: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdProducts: z.lazy(() => ProductUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), productNotificationConfigs: z.lazy(() => ProductNotificationConfigUpdateManyWithoutUserNestedInputObjectSchema).optional(), createdProductNotificationConfigs: z.lazy(() => ProductNotificationConfigUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedProductNotificationConfigs: z.lazy(() => ProductNotificationConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), createdNotificationEventConfigs: z.lazy(() => NotificationEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), updatedNotificationEventConfigs: z.lazy(() => NotificationEventConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional()
}).strict() as SchemaType;
