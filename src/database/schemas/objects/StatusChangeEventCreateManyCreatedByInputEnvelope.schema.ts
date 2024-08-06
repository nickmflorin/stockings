/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateManyCreatedByInputObjectSchema } from './StatusChangeEventCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateManyCreatedByInputEnvelope>;
export const StatusChangeEventCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventCreateManyCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
