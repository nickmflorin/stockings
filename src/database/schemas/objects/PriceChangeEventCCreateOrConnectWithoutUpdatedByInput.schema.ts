/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateOrConnectWithoutUpdatedByInput>;
export const PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
