/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateManyUpdatedByInputObjectSchema } from './PriceChangeEventCCreateManyUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateManyUpdatedByInputEnvelope>;
export const PriceChangeEventCCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventCCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
