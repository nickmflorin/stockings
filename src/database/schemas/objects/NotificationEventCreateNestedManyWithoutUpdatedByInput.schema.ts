/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUpdatedByInput.schema';
import { NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateOrConnectWithoutUpdatedByInput.schema';
import { NotificationEventCreateManyUpdatedByInputEnvelopeObjectSchema } from './NotificationEventCreateManyUpdatedByInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateNestedManyWithoutUpdatedByInput>;
export const NotificationEventCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
