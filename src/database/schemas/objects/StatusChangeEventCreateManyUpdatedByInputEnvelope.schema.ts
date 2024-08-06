/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateManyUpdatedByInputObjectSchema } from './StatusChangeEventCreateManyUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateManyUpdatedByInputEnvelope>;
export const StatusChangeEventCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
