/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductCreateNestedManyWithoutCreatedByInput.schema';
import { ProductRecordCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductRecordCreateNestedManyWithoutCreatedByInput.schema';
import { ProductRecordCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductRecordCreateNestedManyWithoutUpdatedByInput.schema';
import { ProductNotificationConfigCreateNestedManyWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateNestedManyWithoutUserInput.schema';
import { ProductNotificationConfigCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProductNotificationConfigCreateNestedManyWithoutCreatedByInput.schema';
import { ProductNotificationConfigCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateNestedManyWithoutUpdatedByInput.schema';
import { NotificationEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateNestedManyWithoutCreatedByInput.schema';
import { NotificationEventConfigCreateNestedManyWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateNestedManyWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateNestedManyWithoutCreatedByInput.schema';
import { StatusChangeEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateNestedManyWithoutCreatedByInput.schema';
import { PriceChangeEventConfigCreateNestedManyWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateNestedManyWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigCreateNestedManyWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateNestedManyWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateWithoutUpdatedProductsInput>;
export const UserCreateWithoutUpdatedProductsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), clerkId: z.string(), firstName: z.string(), lastName: z.string(), profileImageUrl: z.union([z.string(),
    z.null()]).optional().nullable(), emailAddress: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdProducts: z.lazy(() => ProductCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), productNotificationConfigs: z.lazy(() => ProductNotificationConfigCreateNestedManyWithoutUserInputObjectSchema).optional(), createdProductNotificationConfigs: z.lazy(() => ProductNotificationConfigCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedProductNotificationConfigs: z.lazy(() => ProductNotificationConfigCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), createdNotificationEventConfigs: z.lazy(() => NotificationEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), updatedNotificationEventConfigs: z.lazy(() => NotificationEventConfigCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigCreateNestedManyWithoutUpdatedByInputObjectSchema).optional()
}).strict() as SchemaType;
