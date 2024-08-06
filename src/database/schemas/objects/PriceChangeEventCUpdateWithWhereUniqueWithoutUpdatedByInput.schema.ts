/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUpdateWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const PriceChangeEventCUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
