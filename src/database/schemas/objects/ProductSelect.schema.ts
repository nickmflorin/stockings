/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductRecordInputSchema } from '../input/ProductRecordInput.schema';
import { ProductNotificationConfigInputSchema } from '../input/ProductNotificationConfigInput.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), createdAt: z.boolean().optional(), createdById: z.boolean().optional(), updatedAt: z.boolean().optional(), updatedById: z.boolean().optional(), createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), name: z.boolean().optional(), slug: z.boolean().optional(), code: z.boolean().optional(), imageSrc: z.boolean().optional(), records: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), status: z.boolean().optional(), statusRecordedAt: z.boolean().optional(), price: z.boolean().optional(), priceRecordedAt: z.boolean().optional(), category: z.boolean().optional(), subCategories: z.boolean().optional(), notificationConfigs: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
