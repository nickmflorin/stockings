/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCCreateWithoutUserInputObjectSchema } from './PriceChangeEventCCreateWithoutUserInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateOrConnectWithoutUserInput>;
export const PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
