/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateManyCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateManyCreatedByInputEnvelope>;
export const PriceChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventConfigCreateManyCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
