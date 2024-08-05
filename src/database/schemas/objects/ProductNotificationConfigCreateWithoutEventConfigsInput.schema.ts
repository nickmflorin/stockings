/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedProductNotificationConfigsInput.schema';
import { UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInput.schema';
import { ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema } from './ProductCreateNestedOneWithoutNotificationConfigsInput.schema';
import { UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateNestedOneWithoutProductNotificationConfigsInput.schema';
import { PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateWithoutEventConfigsInput>;
export const ProductNotificationConfigCreateWithoutEventConfigsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedProductNotificationConfigsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema), user: z.lazy(() => UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema).optional()
}).strict() as SchemaType;
