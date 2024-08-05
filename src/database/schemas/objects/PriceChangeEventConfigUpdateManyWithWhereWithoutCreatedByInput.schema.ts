/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigScalarWhereInputObjectSchema } from './PriceChangeEventConfigScalarWhereInput.schema';
import { PriceChangeEventConfigUpdateManyMutationInputObjectSchema } from './PriceChangeEventConfigUpdateManyMutationInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateManyWithWhereWithoutCreatedByInput>;
export const PriceChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
