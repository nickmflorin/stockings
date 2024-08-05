/* eslint-disable */
import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProductUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ProductRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input>;
export const UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), clerkId: z.string(), firstName: z.string(), lastName: z.string(), profileImageUrl: z.union([z.string(),
    z.null()]).optional().nullable(), emailAddress: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), productNotificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), createdProductNotificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProductNotificationConfigs: z.lazy(() => ProductNotificationConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), createdNotificationEventConfigs: z.lazy(() => NotificationEventConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedNotificationEventConfigs: z.lazy(() => NotificationEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional()
}).strict() as SchemaType;
