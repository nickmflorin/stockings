/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateManyProductInputObjectSchema } from './PriceChangeEventCCreateManyProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateManyProductInputEnvelope>;
export const PriceChangeEventCCreateManyProductInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventCCreateManyProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateManyProductInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
