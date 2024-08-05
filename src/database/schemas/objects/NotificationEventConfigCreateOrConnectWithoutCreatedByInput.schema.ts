/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateOrConnectWithoutCreatedByInput>;
export const NotificationEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
