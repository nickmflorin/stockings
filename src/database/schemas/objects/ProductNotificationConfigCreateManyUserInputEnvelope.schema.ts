/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateManyUserInputObjectSchema } from './ProductNotificationConfigCreateManyUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateManyUserInputEnvelope>;
export const ProductNotificationConfigCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductNotificationConfigCreateManyUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
