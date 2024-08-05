/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateManyProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateManyProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelope>;
export const StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => StatusChangeEventConfigCreateManyProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateManyProductNotificationConfigInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
