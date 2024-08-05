/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataScalarWhereWithAggregatesInput>;
export const HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), status: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema),
    z.number()]).optional()
}).strict() as SchemaType;
