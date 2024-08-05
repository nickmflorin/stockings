/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';
import { ProductRecordErrorInputSchema } from '../input/ProductRecordErrorInput.schema';
import { ProductRecordCountOutputTypeArgsObjectSchema } from './ProductRecordCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordInclude>;
export const ProductRecordIncludeObjectSchema: SchemaType = z.object({
    createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional(), errors: z.union([z.boolean(),
    z.lazy(() => ProductRecordErrorInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductRecordCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
