/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventsInput.schema';
import { UserCreateOrConnectWithoutCreatedNotificationEventsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedNotificationEventsInput.schema';
import { UserUpsertWithoutCreatedNotificationEventsInputObjectSchema } from './UserUpsertWithoutCreatedNotificationEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInput.schema';
import { UserUpdateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUpdateWithoutCreatedNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutCreatedNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput>;
export const UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedNotificationEventsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutCreatedNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutCreatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedNotificationEventsInputObjectSchema)]).optional()
}).strict() as SchemaType;
