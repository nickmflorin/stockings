/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { EnumElementAttributeWithAggregatesFilterObjectSchema } from './EnumElementAttributeWithAggregatesFilter.schema';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataScalarWhereWithAggregatesInput>;
export const MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), attribute: z.union([z.lazy(() => EnumElementAttributeWithAggregatesFilterObjectSchema),
    z.lazy(() => ElementAttributeSchema)]).optional(), parentHtml: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
