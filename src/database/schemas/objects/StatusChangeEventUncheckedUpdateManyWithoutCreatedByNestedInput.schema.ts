/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutCreatedByInput.schema';
import { StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutCreatedByInput.schema';
import { StatusChangeEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StatusChangeEventUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { StatusChangeEventCreateManyCreatedByInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyCreatedByInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StatusChangeEventUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { StatusChangeEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './StatusChangeEventUpdateManyWithWhereWithoutCreatedByInput.schema';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const StatusChangeEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
