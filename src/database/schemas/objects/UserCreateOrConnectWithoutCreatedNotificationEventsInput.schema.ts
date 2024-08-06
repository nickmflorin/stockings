/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedNotificationEventsInput>;
export const UserCreateOrConnectWithoutCreatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
