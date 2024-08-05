/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInput>;
export const UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema)])
}).strict() as SchemaType;
