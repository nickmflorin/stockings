/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateOrConnectWithoutUpdatedByInput>;
export const NotificationEventCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
