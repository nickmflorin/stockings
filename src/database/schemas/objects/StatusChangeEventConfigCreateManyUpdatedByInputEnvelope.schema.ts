/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateManyUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateManyUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateManyUpdatedByInputEnvelope>;
export const StatusChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventConfigCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
