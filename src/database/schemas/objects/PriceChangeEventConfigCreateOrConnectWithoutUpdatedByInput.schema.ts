/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInput>;
export const PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
