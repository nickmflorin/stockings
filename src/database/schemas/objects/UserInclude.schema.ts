/* eslint-disable */
import { z } from 'zod';
import { ProductInputSchema } from '../input/ProductInput.schema';
import { ProductRecordInputSchema } from '../input/ProductRecordInput.schema';
import { ProductNotificationConfigInputSchema } from '../input/ProductNotificationConfigInput.schema';
import { NotificationEventConfigInputSchema } from '../input/NotificationEventConfigInput.schema';
import { PriceChangeEventConfigInputSchema } from '../input/PriceChangeEventConfigInput.schema';
import { StatusChangeEventConfigInputSchema } from '../input/StatusChangeEventConfigInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectSchema: SchemaType = z.object({
    createdProducts: z.union([z.boolean(),
    z.lazy(() => ProductInputSchema.findMany)]).optional(), updatedProducts: z.union([z.boolean(),
    z.lazy(() => ProductInputSchema.findMany)]).optional(), createdProductRecords: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), updatedProductRecords: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), productNotificationConfigs: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigInputSchema.findMany)]).optional(), createdProductNotificationConfigs: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigInputSchema.findMany)]).optional(), updatedProductNotificationConfigs: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigInputSchema.findMany)]).optional(), createdNotificationEventConfigs: z.union([z.boolean(),
    z.lazy(() => NotificationEventConfigInputSchema.findMany)]).optional(), updatedNotificationEventConfigs: z.union([z.boolean(),
    z.lazy(() => NotificationEventConfigInputSchema.findMany)]).optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventConfigInputSchema.findMany)]).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventConfigInputSchema.findMany)]).optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventConfigInputSchema.findMany)]).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventConfigInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
