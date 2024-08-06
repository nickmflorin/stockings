/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateManyUserInputObjectSchema } from './StatusChangeEventCreateManyUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateManyUserInputEnvelope>;
export const StatusChangeEventCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventCreateManyUserInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
