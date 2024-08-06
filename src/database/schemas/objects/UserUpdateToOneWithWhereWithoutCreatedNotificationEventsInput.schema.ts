/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUpdateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInput>;
export const UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
