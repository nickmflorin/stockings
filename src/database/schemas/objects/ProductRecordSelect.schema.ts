/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';
import { ProductRecordErrorInputSchema } from '../input/ProductRecordErrorInput.schema';
import { ProductRecordCountOutputTypeArgsObjectSchema } from './ProductRecordCountOutputTypeArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordSelect>;
export const ProductRecordSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), createdAt: z.boolean().optional(), createdById: z.boolean().optional(), updatedAt: z.boolean().optional(), updatedById: z.boolean().optional(), timestamp: z.boolean().optional(), createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional(), productId: z.boolean().optional(), price: z.boolean().optional(), rawPrice: z.boolean().optional(), status: z.boolean().optional(), wasManuallyCreated: z.boolean().optional(), manuallyChangedFields: z.boolean().optional(), errors: z.union([z.boolean(),
    z.lazy(() => ProductRecordErrorInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductRecordCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
