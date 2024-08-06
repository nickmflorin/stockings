/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateManyCreatedByInputObjectSchema } from './PriceChangeEventCCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateManyCreatedByInputEnvelope>;
export const PriceChangeEventCCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventCCreateManyCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
