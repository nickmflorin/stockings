/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductRecordInputSchema } from '../input/ProductRecordInput.schema';
import { NotificationEventInputSchema } from '../input/NotificationEventInput.schema';
import { PriceChangeEventCInputSchema } from '../input/PriceChangeEventCInput.schema';
import { StatusChangeEventInputSchema } from '../input/StatusChangeEventInput.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectSchema: SchemaType = z.object({
    createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), records: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), notificationEvents: z.union([z.boolean(),
    z.lazy(() => NotificationEventInputSchema.findMany)]).optional(), delegate_aux_Product_notificationEvents_PriceChange_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventCInputSchema.findMany)]).optional(), delegate_aux_Product_notificationEvents_StatusChang_0: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
