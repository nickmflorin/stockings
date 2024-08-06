/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutUpdatedByInput.schema';
import { StatusChangeEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { StatusChangeEventCreateManyUpdatedByInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyUpdatedByInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { StatusChangeEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const StatusChangeEventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
