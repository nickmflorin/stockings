/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutUserInputObjectSchema } from './PriceChangeEventCUpdateWithoutUserInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutUserInput.schema';
import { PriceChangeEventCCreateWithoutUserInputObjectSchema } from './PriceChangeEventCCreateWithoutUserInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpsertWithWhereUniqueWithoutUserInput>;
export const PriceChangeEventCUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
