/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { EnumElementAttributeWithAggregatesFilterObjectSchema } from './EnumElementAttributeWithAggregatesFilter.schema';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidAttributeErrorDataScalarWhereWithAggregatesInput>;
export const InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), attribute: z.union([z.lazy(() => EnumElementAttributeWithAggregatesFilterObjectSchema),
    z.lazy(() => ElementAttributeSchema)]).optional(), parentHtml: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
