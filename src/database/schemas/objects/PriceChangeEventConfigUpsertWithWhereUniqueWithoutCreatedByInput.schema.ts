/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUpdateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInput>;
export const PriceChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
