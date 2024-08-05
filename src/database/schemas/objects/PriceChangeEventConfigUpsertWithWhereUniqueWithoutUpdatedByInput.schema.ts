/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUpdateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const PriceChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
