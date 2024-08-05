/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateOrConnectWithoutUpdatedByInput>;
export const NotificationEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
