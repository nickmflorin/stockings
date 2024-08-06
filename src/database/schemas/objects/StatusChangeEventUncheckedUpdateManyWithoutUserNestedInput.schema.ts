/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutUserInputObjectSchema } from './StatusChangeEventCreateWithoutUserInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUserInput.schema';
import { StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutUserInput.schema';
import { StatusChangeEventUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StatusChangeEventUpsertWithWhereUniqueWithoutUserInput.schema';
import { StatusChangeEventCreateManyUserInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyUserInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StatusChangeEventUpdateWithWhereUniqueWithoutUserInput.schema';
import { StatusChangeEventUpdateManyWithWhereWithoutUserInputObjectSchema } from './StatusChangeEventUpdateManyWithWhereWithoutUserInput.schema';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedUpdateManyWithoutUserNestedInput>;
export const StatusChangeEventUncheckedUpdateManyWithoutUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyUserInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
