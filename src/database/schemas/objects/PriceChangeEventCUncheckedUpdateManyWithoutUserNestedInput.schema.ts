/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutUserInputObjectSchema } from './PriceChangeEventCCreateWithoutUserInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUserInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutUserInput.schema';
import { PriceChangeEventCUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PriceChangeEventCUpsertWithWhereUniqueWithoutUserInput.schema';
import { PriceChangeEventCCreateManyUserInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyUserInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PriceChangeEventCUpdateWithWhereUniqueWithoutUserInput.schema';
import { PriceChangeEventCUpdateManyWithWhereWithoutUserInputObjectSchema } from './PriceChangeEventCUpdateManyWithWhereWithoutUserInput.schema';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedUpdateManyWithoutUserNestedInput>;
export const PriceChangeEventCUncheckedUpdateManyWithoutUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyUserInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
