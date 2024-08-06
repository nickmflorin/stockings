/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutProductInputObjectSchema } from './PriceChangeEventCCreateWithoutProductInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutProductInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutProductInput.schema';
import { PriceChangeEventCUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './PriceChangeEventCUpsertWithWhereUniqueWithoutProductInput.schema';
import { PriceChangeEventCCreateManyProductInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyProductInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './PriceChangeEventCUpdateWithWhereUniqueWithoutProductInput.schema';
import { PriceChangeEventCUpdateManyWithWhereWithoutProductInputObjectSchema } from './PriceChangeEventCUpdateManyWithWhereWithoutProductInput.schema';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedUpdateManyWithoutProductNestedInput>;
export const PriceChangeEventCUncheckedUpdateManyWithoutProductNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyProductInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutProductInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
