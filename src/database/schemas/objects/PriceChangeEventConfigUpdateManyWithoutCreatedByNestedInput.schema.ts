/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateOrConnectWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { PriceChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './PriceChangeEventConfigCreateManyCreatedByInputEnvelope.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUpdateManyWithWhereWithoutCreatedByInput.schema';
import { PriceChangeEventConfigScalarWhereInputObjectSchema } from './PriceChangeEventConfigScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateManyWithoutCreatedByNestedInput>;
export const PriceChangeEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
