/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutProductInputObjectSchema } from './PriceChangeEventCCreateWithoutProductInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutProductInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutProductInput.schema';
import { PriceChangeEventCCreateManyProductInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyProductInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedCreateNestedManyWithoutProductInput>;
export const PriceChangeEventCUncheckedCreateNestedManyWithoutProductInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyProductInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
