/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateOrConnectWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { StatusChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './StatusChangeEventConfigCreateManyCreatedByInputEnvelope.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUpdateManyWithWhereWithoutCreatedByInput.schema';
import { StatusChangeEventConfigScalarWhereInputObjectSchema } from './StatusChangeEventConfigScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateManyWithoutCreatedByNestedInput>;
export const StatusChangeEventConfigUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
