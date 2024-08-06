/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateeventTypesInput>;
export const StatusChangeEventCreateeventTypesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductStatusSchema).array()
}).strict() as SchemaType;
