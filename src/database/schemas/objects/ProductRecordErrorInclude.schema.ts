/* eslint-disable */
import { z } from 'zod';
import { ProductRecordArgsObjectSchema } from './ProductRecordArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorInclude>;
export const ProductRecordErrorIncludeObjectSchema: SchemaType = z.object({
    record: z.union([z.boolean(),
    z.lazy(() => ProductRecordArgsObjectSchema)]).optional()
}).strict() as SchemaType;
