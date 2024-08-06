/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventsInput.schema';
import { UserCreateOrConnectWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedNotificationEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedNotificationEventsInput>;
export const UserCreateNestedOneWithoutCreatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
