/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema } from './StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelope.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigScalarWhereInputObjectSchema } from './StatusChangeEventConfigScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInput>;
export const StatusChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => StatusChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => StatusChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
