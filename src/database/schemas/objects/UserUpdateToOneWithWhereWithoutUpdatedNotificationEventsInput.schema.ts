/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUpdateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInput>;
export const UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
