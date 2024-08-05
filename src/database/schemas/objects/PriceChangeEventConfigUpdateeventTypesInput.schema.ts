/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateeventTypesInput>;
export const PriceChangeEventConfigUpdateeventTypesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => PriceChangeEventTypeSchema).array().optional(), push: z.union([z.lazy(() => PriceChangeEventTypeSchema),
    z.lazy(() => PriceChangeEventTypeSchema).array()]).optional()
}).strict() as SchemaType;
