/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutProductInputObjectSchema } from './PriceChangeEventCUpdateWithoutProductInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutProductInput.schema';
import { PriceChangeEventCCreateWithoutProductInputObjectSchema } from './PriceChangeEventCCreateWithoutProductInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpsertWithWhereUniqueWithoutProductInput>;
export const PriceChangeEventCUpsertWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutProductInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
