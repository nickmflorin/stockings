/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';
import { PriceChangeEventCUpdateManyMutationInputObjectSchema } from './PriceChangeEventCUpdateManyMutationInput.schema';
import { PriceChangeEventCUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateManyWithWhereWithoutCreatedByInput>;
export const PriceChangeEventCUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateManyMutationInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
