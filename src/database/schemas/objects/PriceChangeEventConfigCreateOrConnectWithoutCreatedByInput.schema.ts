/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateOrConnectWithoutCreatedByInput>;
export const PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
