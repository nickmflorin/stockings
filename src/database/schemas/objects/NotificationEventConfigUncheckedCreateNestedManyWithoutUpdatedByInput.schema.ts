/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { NotificationEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './NotificationEventConfigCreateManyUpdatedByInputEnvelope.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const NotificationEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
