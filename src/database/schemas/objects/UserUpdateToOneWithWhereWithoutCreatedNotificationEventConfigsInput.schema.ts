/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUpdateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedNotificationEventConfigsInput>;
export const UserUpdateToOneWithWhereWithoutCreatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema)])
}).strict() as SchemaType;
