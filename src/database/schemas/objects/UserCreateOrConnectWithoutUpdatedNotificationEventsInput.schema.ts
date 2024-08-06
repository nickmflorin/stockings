/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedNotificationEventsInput>;
export const UserCreateOrConnectWithoutUpdatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
