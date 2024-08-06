/* eslint-disable */
import { z } from 'zod';
import { ProductInputSchema } from '../input/ProductInput.schema';
import { ProductRecordInputSchema } from '../input/ProductRecordInput.schema';
import { NotificationEventInputSchema } from '../input/NotificationEventInput.schema';
import { PriceChangeEventCInputSchema } from '../input/PriceChangeEventCInput.schema';
import { StatusChangeEventInputSchema } from '../input/StatusChangeEventInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), clerkId: z.boolean().optional(), firstName: z.boolean().optional(), lastName: z.boolean().optional(), profileImageUrl: z.boolean().optional(), emailAddress: z.boolean().optional(), createdAt: z.boolean().optional(), updatedAt: z.boolean().optional(), createdProducts: z.union([z.boolean(),
    z.lazy(() => ProductInputSchema.findMany)]).optional(), updatedProducts: z.union([z.boolean(),
    z.lazy(() => ProductInputSchema.findMany)]).optional(), createdProductRecords: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), updatedProductRecords: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), createdNotificationEvents: z.union([z.boolean(),
    z.lazy(() => NotificationEventInputSchema.findMany)]).optional(), updatedNotificationEvents: z.union([z.boolean(),
    z.lazy(() => NotificationEventInputSchema.findMany)]).optional(), notificationEvents: z.union([z.boolean(),
    z.lazy(() => NotificationEventInputSchema.findMany)]).optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventCInputSchema.findMany)]).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventInputSchema.findMany)]).optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventCInputSchema.findMany)]).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventInputSchema.findMany)]).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventCInputSchema.findMany)]).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
