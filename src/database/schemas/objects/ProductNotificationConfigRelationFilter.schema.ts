/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigRelationFilter>;
export const ProductNotificationConfigRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional(), isNot: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
