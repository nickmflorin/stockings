/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutProductInputObjectSchema } from './PriceChangeEventCUpdateWithoutProductInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateWithWhereUniqueWithoutProductInput>;
export const PriceChangeEventCUpdateWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
