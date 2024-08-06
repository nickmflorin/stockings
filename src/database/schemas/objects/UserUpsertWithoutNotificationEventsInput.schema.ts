/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutNotificationEventsInputObjectSchema } from './UserUpdateWithoutNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationEventsInput.schema';
import { UserCreateWithoutNotificationEventsInputObjectSchema } from './UserCreateWithoutNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationEventsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutNotificationEventsInput>;
export const UserUpsertWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutNotificationEventsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutNotificationEventsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
