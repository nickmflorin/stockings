/* eslint-disable */
import { z } from 'zod';
import { ProductSelectObjectSchema } from './ProductSelect.schema';
import { ProductIncludeObjectSchema } from './ProductInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductArgs>;
export const ProductArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductSelectObjectSchema).optional(), include: z.lazy(() => ProductIncludeObjectSchema).optional()
}).strict() as SchemaType;
