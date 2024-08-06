/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutCreatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateOrConnectWithoutCreatedByInput>;
export const PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
