/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductRecordInputSchema } from '../input/ProductRecordInput.schema';
import { NotificationEventInputSchema } from '../input/NotificationEventInput.schema';
import { PriceChangeEventCInputSchema } from '../input/PriceChangeEventCInput.schema';
import { StatusChangeEventInputSchema } from '../input/StatusChangeEventInput.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), createdAt: z.boolean().optional(), createdById: z.boolean().optional(), updatedAt: z.boolean().optional(), updatedById: z.boolean().optional(), createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), name: z.boolean().optional(), slug: z.boolean().optional(), code: z.boolean().optional(), imageSrc: z.boolean().optional(), records: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), status: z.boolean().optional(), statusRecordedAt: z.boolean().optional(), price: z.boolean().optional(), priceRecordedAt: z.boolean().optional(), category: z.boolean().optional(), subCategories: z.boolean().optional(), notificationEvents: z.union([z.boolean(),
    z.lazy(() => NotificationEventInputSchema.findMany)]).optional(), delegate_aux_Product_notificationEvents_PriceChange_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventCInputSchema.findMany)]).optional(), delegate_aux_Product_notificationEvents_StatusChang_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
