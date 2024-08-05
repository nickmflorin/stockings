/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCountOutputTypeSelectObjectSchema } from './ProductNotificationConfigCountOutputTypeSelect.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCountOutputTypeArgs>;
export const ProductNotificationConfigCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductNotificationConfigCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;
