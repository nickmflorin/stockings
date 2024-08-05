/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataCreateInput>;
export const MissingAttributeErrorDataCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), attribute: z.lazy(() => ElementAttributeSchema), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
