/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateManyCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateManyCreatedByInputEnvelope>;
export const StatusChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventConfigCreateManyCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
