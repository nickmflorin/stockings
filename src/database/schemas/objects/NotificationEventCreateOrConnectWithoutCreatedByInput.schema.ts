/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventCreateWithoutCreatedByInputObjectSchema } from './NotificationEventCreateWithoutCreatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateOrConnectWithoutCreatedByInput>;
export const NotificationEventCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
