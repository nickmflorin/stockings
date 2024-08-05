/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigScalarWhereInput>;
export const ProductNotificationConfigScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema),
    z.lazy(() => ProductNotificationConfigScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
