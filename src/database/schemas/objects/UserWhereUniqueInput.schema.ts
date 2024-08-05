/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { ProductRecordListRelationFilterObjectSchema } from './ProductRecordListRelationFilter.schema';
import { ProductNotificationConfigListRelationFilterObjectSchema } from './ProductNotificationConfigListRelationFilter.schema';
import { NotificationEventConfigListRelationFilterObjectSchema } from './NotificationEventConfigListRelationFilter.schema';
import { PriceChangeEventConfigListRelationFilterObjectSchema } from './PriceChangeEventConfigListRelationFilter.schema';
import { StatusChangeEventConfigListRelationFilterObjectSchema } from './StatusChangeEventConfigListRelationFilter.schema';

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
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdProducts: z.lazy(() => ProductListRelationFilterObjectSchema).optional(), updatedProducts: z.lazy(() => ProductListRelationFilterObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordListRelationFilterObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordListRelationFilterObjectSchema).optional(), productNotificationConfigs: z.lazy(() => ProductNotificationConfigListRelationFilterObjectSchema).optional(), createdProductNotificationConfigs: z.lazy(() => ProductNotificationConfigListRelationFilterObjectSchema).optional(), updatedProductNotificationConfigs: z.lazy(() => ProductNotificationConfigListRelationFilterObjectSchema).optional(), createdNotificationEventConfigs: z.lazy(() => NotificationEventConfigListRelationFilterObjectSchema).optional(), updatedNotificationEventConfigs: z.lazy(() => NotificationEventConfigListRelationFilterObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigListRelationFilterObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigListRelationFilterObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigListRelationFilterObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
