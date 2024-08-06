/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCInclude>;
export const PriceChangeEventCIncludeObjectSchema: SchemaType = z.object({
    createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict() as SchemaType;
