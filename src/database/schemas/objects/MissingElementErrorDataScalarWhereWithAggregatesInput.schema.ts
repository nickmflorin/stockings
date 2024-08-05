/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataScalarWhereWithAggregatesInput>;
export const MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), selector: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
