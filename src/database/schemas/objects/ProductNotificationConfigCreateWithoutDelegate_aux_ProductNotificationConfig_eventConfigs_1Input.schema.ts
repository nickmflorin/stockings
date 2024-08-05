/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedProductNotificationConfigsInput.schema';
import { UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInput.schema';
import { ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema } from './ProductCreateNestedOneWithoutNotificationConfigsInput.schema';
import { UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutProductNotificationConfigsInput.schema';
import { NotificationEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input>;
export const ProductNotificationConfigCreateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedProductNotificationConfigsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema), eventConfigs: z.lazy(() => NotificationEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional()
}).strict() as SchemaType;
