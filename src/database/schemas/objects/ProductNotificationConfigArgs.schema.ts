/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigSelectObjectSchema } from './ProductNotificationConfigSelect.schema';
import { ProductNotificationConfigIncludeObjectSchema } from './ProductNotificationConfigInclude.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigArgs>;
export const ProductNotificationConfigArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductNotificationConfigSelectObjectSchema).optional(), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema).optional()
}).strict() as SchemaType;
