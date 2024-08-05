/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { NotificationEventConfigListRelationFilterObjectSchema } from './NotificationEventConfigListRelationFilter.schema';
import { PriceChangeEventConfigListRelationFilterObjectSchema } from './PriceChangeEventConfigListRelationFilter.schema';
import { StatusChangeEventConfigListRelationFilterObjectSchema } from './StatusChangeEventConfigListRelationFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigWhereUniqueInput>;
export const ProductNotificationConfigWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => ProductNotificationConfigWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductNotificationConfigWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).array()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), product: z.union([z.lazy(() => ProductRelationFilterObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema)]).optional(), user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), eventConfigs: z.lazy(() => NotificationEventConfigListRelationFilterObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigListRelationFilterObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
