/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInput.schema';
import { ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema } from './ProductCreateNestedOneWithoutNotificationConfigsInput.schema';
import { UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutProductNotificationConfigsInput.schema';
import { NotificationEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateWithoutCreatedByInput>;
export const ProductNotificationConfigCreateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema), eventConfigs: z.lazy(() => NotificationEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional()
}).strict() as SchemaType;
