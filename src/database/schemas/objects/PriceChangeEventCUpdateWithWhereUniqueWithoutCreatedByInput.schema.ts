/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUpdateWithoutCreatedByInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateWithWhereUniqueWithoutCreatedByInput>;
export const PriceChangeEventCUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
