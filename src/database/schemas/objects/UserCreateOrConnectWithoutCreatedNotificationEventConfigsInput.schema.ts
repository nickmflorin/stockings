/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedNotificationEventConfigsInput>;
export const UserCreateOrConnectWithoutCreatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema)])
}).strict() as SchemaType;
