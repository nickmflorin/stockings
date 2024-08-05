/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigListRelationFilter>;
export const ProductNotificationConfigListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional(), some: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional(), none: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
