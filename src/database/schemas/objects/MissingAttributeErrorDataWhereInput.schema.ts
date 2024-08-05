/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumElementAttributeFilterObjectSchema } from './EnumElementAttributeFilter.schema';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataWhereInput>;
export const MissingAttributeErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => MissingAttributeErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingAttributeErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => MissingAttributeErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => MissingAttributeErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingAttributeErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), attribute: z.union([z.lazy(() => EnumElementAttributeFilterObjectSchema),
    z.lazy(() => ElementAttributeSchema)]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
