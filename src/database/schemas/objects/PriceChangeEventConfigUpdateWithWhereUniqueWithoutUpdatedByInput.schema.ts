/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUpdateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const PriceChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
