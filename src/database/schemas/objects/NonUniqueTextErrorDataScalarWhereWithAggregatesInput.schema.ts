/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataScalarWhereWithAggregatesInput>;
export const NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
