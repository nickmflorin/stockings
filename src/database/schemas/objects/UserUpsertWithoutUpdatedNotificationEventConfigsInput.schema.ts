/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUpdateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutUpdatedNotificationEventConfigsInput>;
export const UserUpsertWithoutUpdatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
