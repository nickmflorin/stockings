/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateeventTypesInput>;
export const StatusChangeEventConfigCreateeventTypesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductStatusSchema).array()
}).strict() as SchemaType;
