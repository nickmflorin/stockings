/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUpdateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedNotificationEventConfigsInput>;
export const UserUpdateToOneWithWhereWithoutUpdatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema)])
}).strict() as SchemaType;
