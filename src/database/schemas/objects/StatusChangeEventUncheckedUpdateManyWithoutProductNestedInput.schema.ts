/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutProductInputObjectSchema } from './StatusChangeEventCreateWithoutProductInput.schema';
import { StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutProductInput.schema';
import { StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutProductInput.schema';
import { StatusChangeEventUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './StatusChangeEventUpsertWithWhereUniqueWithoutProductInput.schema';
import { StatusChangeEventCreateManyProductInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyProductInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './StatusChangeEventUpdateWithWhereUniqueWithoutProductInput.schema';
import { StatusChangeEventUpdateManyWithWhereWithoutProductInputObjectSchema } from './StatusChangeEventUpdateManyWithWhereWithoutProductInput.schema';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedUpdateManyWithoutProductNestedInput>;
export const StatusChangeEventUncheckedUpdateManyWithoutProductNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyProductInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
