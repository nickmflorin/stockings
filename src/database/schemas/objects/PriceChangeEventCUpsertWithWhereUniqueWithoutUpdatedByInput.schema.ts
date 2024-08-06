/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUpdateWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutUpdatedByInput.schema';
import { PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const PriceChangeEventCUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
