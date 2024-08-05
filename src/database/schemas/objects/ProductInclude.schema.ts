/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductRecordInputSchema } from '../input/ProductRecordInput.schema';
import { ProductNotificationConfigInputSchema } from '../input/ProductNotificationConfigInput.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectSchema: SchemaType = z.object({
    createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), records: z.union([z.boolean(),
    z.lazy(() => ProductRecordInputSchema.findMany)]).optional(), notificationConfigs: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
