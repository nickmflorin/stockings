/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUpdateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutCreatedNotificationEventConfigsInput>;
export const UserUpsertWithoutCreatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
