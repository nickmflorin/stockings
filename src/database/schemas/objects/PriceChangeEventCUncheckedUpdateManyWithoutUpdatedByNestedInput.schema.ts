/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutUpdatedByInput.schema';
import { PriceChangeEventCUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { PriceChangeEventCCreateManyUpdatedByInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyUpdatedByInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { PriceChangeEventCUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { PriceChangeEventCScalarWhereInputObjectSchema } from './PriceChangeEventCScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const PriceChangeEventCUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventCScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
