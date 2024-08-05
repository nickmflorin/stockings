/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCountOutputTypeSelectObjectSchema } from './ProductRecordCountOutputTypeSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCountOutputTypeArgs>;
export const ProductRecordCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductRecordCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;
