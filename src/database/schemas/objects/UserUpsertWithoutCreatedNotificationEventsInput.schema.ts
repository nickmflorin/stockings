/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUpdateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedNotificationEventsInput.schema';
import { UserCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutCreatedNotificationEventsInput>;
export const UserUpsertWithoutCreatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedNotificationEventsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
