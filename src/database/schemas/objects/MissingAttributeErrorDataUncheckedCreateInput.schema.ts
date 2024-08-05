/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataUncheckedCreateInput>;
export const MissingAttributeErrorDataUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), attribute: z.lazy(() => ElementAttributeSchema), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
