/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateManyUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateManyUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateManyUpdatedByInputEnvelope>;
export const PriceChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventConfigCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
