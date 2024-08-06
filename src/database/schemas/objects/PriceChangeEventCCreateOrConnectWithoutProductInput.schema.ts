/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCCreateWithoutProductInputObjectSchema } from './PriceChangeEventCCreateWithoutProductInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateOrConnectWithoutProductInput>;
export const PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
