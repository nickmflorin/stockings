/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';
import { PriceChangeEventCUpdateManyMutationInputObjectSchema } from './PriceChangeEventCUpdateManyMutationInput.schema';
import { PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateManyWithWhereWithoutUpdatedByInput>;
export const PriceChangeEventCUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventCUpdateManyMutationInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
