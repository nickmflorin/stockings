/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ProductNotificationConfigArgsObjectSchema } from './ProductNotificationConfigArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigInclude>;
export const StatusChangeEventConfigIncludeObjectSchema: SchemaType = z.object({
    createdBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), updatedBy: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), productNotificationConfig: z.union([z.boolean(),
    z.lazy(() => ProductNotificationConfigArgsObjectSchema)]).optional()
}).strict() as SchemaType;
