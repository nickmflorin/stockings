/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateManyProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateManyProductNotificationConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelope>;
export const PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PriceChangeEventConfigCreateManyProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateManyProductNotificationConfigInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
