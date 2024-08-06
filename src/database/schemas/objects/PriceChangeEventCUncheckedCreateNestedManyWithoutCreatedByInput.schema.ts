/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutCreatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutCreatedByInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutCreatedByInput.schema';
import { PriceChangeEventCCreateManyCreatedByInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyCreatedByInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedCreateNestedManyWithoutCreatedByInput>;
export const PriceChangeEventCUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
