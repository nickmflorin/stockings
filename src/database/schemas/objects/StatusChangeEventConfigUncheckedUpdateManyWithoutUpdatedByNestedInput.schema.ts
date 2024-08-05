/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './StatusChangeEventConfigCreateManyUpdatedByInputEnvelope.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigScalarWhereInputObjectSchema } from './StatusChangeEventConfigScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
