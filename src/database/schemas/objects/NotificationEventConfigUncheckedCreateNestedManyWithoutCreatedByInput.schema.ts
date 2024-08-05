/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutCreatedByInput.schema';
import { NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateOrConnectWithoutCreatedByInput.schema';
import { NotificationEventConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './NotificationEventConfigCreateManyCreatedByInputEnvelope.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUncheckedCreateNestedManyWithoutCreatedByInput>;
export const NotificationEventConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
