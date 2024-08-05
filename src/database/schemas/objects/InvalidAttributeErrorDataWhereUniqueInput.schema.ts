/* eslint-disable */
import { z } from 'zod';
import { InvalidAttributeErrorDataWhereInputObjectSchema } from './InvalidAttributeErrorDataWhereInput.schema';
import { EnumElementAttributeFilterObjectSchema } from './EnumElementAttributeFilter.schema';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidAttributeErrorDataWhereUniqueInput>;
export const InvalidAttributeErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => InvalidAttributeErrorDataWhereInputObjectSchema),
    z.lazy(() => InvalidAttributeErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => InvalidAttributeErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => InvalidAttributeErrorDataWhereInputObjectSchema),
    z.lazy(() => InvalidAttributeErrorDataWhereInputObjectSchema).array()]).optional(), attribute: z.union([z.lazy(() => EnumElementAttributeFilterObjectSchema),
    z.lazy(() => ElementAttributeSchema)]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), value: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
