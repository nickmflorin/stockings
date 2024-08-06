/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCSelect>;
export const PriceChangeEventCSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), createdAt: z.boolean().optional(), createdById: z.boolean().optional(), updatedAt: z.boolean().optional(), updatedById: z.boolean().optional(), createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional(), productId: z.boolean().optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), userId: z.boolean().optional(), contentType: z.boolean().optional(), eventTypes: z.boolean().optional()
}).strict() as SchemaType;
