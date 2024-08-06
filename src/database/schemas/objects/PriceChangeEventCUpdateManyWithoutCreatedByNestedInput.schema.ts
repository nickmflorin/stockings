/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutCreatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutCreatedByInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutCreatedByInput.schema';
import { PriceChangeEventCUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { PriceChangeEventCCreateManyCreatedByInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyCreatedByInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { PriceChangeEventCUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './PriceChangeEventCUpdateManyWithWhereWithoutCreatedByInput.schema';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUpdateManyWithoutCreatedByNestedInput>;
export const PriceChangeEventCUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
