/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorSelectObjectSchema } from './ProductRecordErrorSelect.schema';
import { ProductRecordErrorIncludeObjectSchema } from './ProductRecordErrorInclude.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorArgs>;
export const ProductRecordErrorArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductRecordErrorSelectObjectSchema).optional(), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema).optional()
}).strict() as SchemaType;
