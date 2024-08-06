/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutNotificationEventsInputObjectSchema } from './UserCreateWithoutNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationEventsInput>;
export const UserCreateOrConnectWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutNotificationEventsInputObjectSchema)])
}).strict() as SchemaType;
