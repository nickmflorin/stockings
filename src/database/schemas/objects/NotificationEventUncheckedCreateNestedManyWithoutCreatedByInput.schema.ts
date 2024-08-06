/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutCreatedByInputObjectSchema } from './NotificationEventCreateWithoutCreatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutCreatedByInput.schema';
import { NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './NotificationEventCreateOrConnectWithoutCreatedByInput.schema';
import { NotificationEventCreateManyCreatedByInputEnvelopeObjectSchema } from './NotificationEventCreateManyCreatedByInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput>;
export const NotificationEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
