/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { ProductRecordListRelationFilterObjectSchema } from './ProductRecordListRelationFilter.schema';
import { NotificationEventListRelationFilterObjectSchema } from './NotificationEventListRelationFilter.schema';
import { PriceChangeEventCListRelationFilterObjectSchema } from './PriceChangeEventCListRelationFilter.schema';
import { StatusChangeEventListRelationFilterObjectSchema } from './StatusChangeEventListRelationFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserWhereUniqueInput>;
export const UserWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), clerkId: z.string().optional(), AND: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema).array()]).optional(), firstName: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), lastName: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), profileImageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), emailAddress: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdProducts: z.lazy(() => ProductListRelationFilterObjectSchema).optional(), updatedProducts: z.lazy(() => ProductListRelationFilterObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordListRelationFilterObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordListRelationFilterObjectSchema).optional(), createdNotificationEvents: z.lazy(() => NotificationEventListRelationFilterObjectSchema).optional(), updatedNotificationEvents: z.lazy(() => NotificationEventListRelationFilterObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventListRelationFilterObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCListRelationFilterObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventListRelationFilterObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCListRelationFilterObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventListRelationFilterObjectSchema).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.lazy(() => PriceChangeEventCListRelationFilterObjectSchema).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.lazy(() => StatusChangeEventListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
