/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUpdateWithoutCreatedByInput.schema';
import { PriceChangeEventCUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedUpdateWithoutCreatedByInput.schema';
import { PriceChangeEventCCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutCreatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpsertWithWhereUniqueWithoutCreatedByInput>;
export const PriceChangeEventCUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
