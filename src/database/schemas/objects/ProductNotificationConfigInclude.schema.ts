/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';
import { NotificationEventConfigInputSchema } from '../input/NotificationEventConfigInput.schema';
import { PriceChangeEventConfigInputSchema } from '../input/PriceChangeEventConfigInput.schema';
import { StatusChangeEventConfigInputSchema } from '../input/StatusChangeEventConfigInput.schema';
import { ProductNotificationConfigCountOutputTypeArgsObjectSchema } from './ProductNotificationConfigCountOutputTypeArgs.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigInclude>;
export const ProductNotificationConfigIncludeObjectSchema: SchemaType = z.object({
    createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), eventConfigs: z.union([z.boolean(),
    z.lazy(() => NotificationEventConfigInputSchema.findMany)]).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.union([z.boolean(),
    z.lazy(() => PriceChangeEventConfigInputSchema.findMany)]).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.union([z.boolean(),
    z.lazy(() => StatusChangeEventConfigInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
