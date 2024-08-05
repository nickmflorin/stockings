/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateeventTypesInput>;
export const PriceChangeEventConfigCreateeventTypesInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => PriceChangeEventTypeSchema).array()
}).strict() as SchemaType;
