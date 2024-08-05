/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigScalarWhereInputObjectSchema } from './PriceChangeEventConfigScalarWhereInput.schema';
import { PriceChangeEventConfigUpdateManyMutationInputObjectSchema } from './PriceChangeEventConfigUpdateManyMutationInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInput>;
export const PriceChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
