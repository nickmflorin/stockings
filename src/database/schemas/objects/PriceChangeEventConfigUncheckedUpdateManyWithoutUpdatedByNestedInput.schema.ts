/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './PriceChangeEventConfigCreateManyUpdatedByInputEnvelope.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigScalarWhereInputObjectSchema } from './PriceChangeEventConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const PriceChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
