/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUpdateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInput>;
export const PriceChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
