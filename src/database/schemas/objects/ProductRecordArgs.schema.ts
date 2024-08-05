/* eslint-disable */
import { z } from 'zod';
import { ProductRecordSelectObjectSchema } from './ProductRecordSelect.schema';
import { ProductRecordIncludeObjectSchema } from './ProductRecordInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordArgs>;
export const ProductRecordArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductRecordSelectObjectSchema).optional(), include: z.lazy(() => ProductRecordIncludeObjectSchema).optional()
}).strict() as SchemaType;
