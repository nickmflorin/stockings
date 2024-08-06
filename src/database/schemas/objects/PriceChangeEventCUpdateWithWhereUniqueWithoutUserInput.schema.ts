/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutUserInputObjectSchema } from './PriceChangeEventCUpdateWithoutUserInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateWithWhereUniqueWithoutUserInput>;
export const PriceChangeEventCUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
