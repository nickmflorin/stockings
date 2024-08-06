/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateManyProductInputObjectSchema } from './StatusChangeEventCreateManyProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateManyProductInputEnvelope>;
export const StatusChangeEventCreateManyProductInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventCreateManyProductInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateManyProductInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
