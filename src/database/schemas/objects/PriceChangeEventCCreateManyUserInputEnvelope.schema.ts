/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateManyUserInputObjectSchema } from './PriceChangeEventCCreateManyUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateManyUserInputEnvelope>;
export const PriceChangeEventCCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventCCreateManyUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
