/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateeventTypesInput>;
export const StatusChangeEventConfigUpdateeventTypesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductStatusSchema).array().optional(), push: z.union([z.lazy(() => ProductStatusSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional()
}).strict() as SchemaType;
