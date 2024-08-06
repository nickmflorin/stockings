/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUpdateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedNotificationEventsInput.schema';
import { UserCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutUpdatedNotificationEventsInput>;
export const UserUpsertWithoutUpdatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedNotificationEventsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
