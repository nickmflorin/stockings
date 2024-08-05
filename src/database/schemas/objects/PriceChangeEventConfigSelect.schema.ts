/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductNotificationConfigArgsObjectSchema } from './ProductNotificationConfigArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigSelect>;
export const PriceChangeEventConfigSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), createdAt: z.boolean().optional(), createdById: z.boolean().optional(), updatedAt: z.boolean().optional(), updatedById: z.boolean().optional(), createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), productNotificationConfig: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigArgsObjectSchema)]).optional(), productNotificationConfigId: z.boolean().optional(), contentType: z.boolean().optional(), eventTypes: z.boolean().optional()
}).strict() as SchemaType;
