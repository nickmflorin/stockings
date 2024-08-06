/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';
import { PriceChangeEventCUpdateManyMutationInputObjectSchema } from './PriceChangeEventCUpdateManyMutationInput.schema';
import { PriceChangeEventCUncheckedUpdateManyWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedUpdateManyWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateManyWithWhereWithoutProductInput>;
export const PriceChangeEventCUpdateManyWithWhereWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateManyMutationInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
