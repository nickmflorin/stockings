/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutNotificationEventsInputObjectSchema } from './UserUpdateWithoutNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationEventsInput>;
export const UserUpdateToOneWithWhereWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
