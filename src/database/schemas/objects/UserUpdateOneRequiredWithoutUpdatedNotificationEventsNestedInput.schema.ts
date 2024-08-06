/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserCreateOrConnectWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedNotificationEventsInput.schema';
import { UserUpsertWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUpsertWithoutUpdatedNotificationEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInput.schema';
import { UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUpdateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput>;
export const UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedNotificationEventsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutUpdatedNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedNotificationEventsInputObjectSchema)]).optional()
}).strict() as SchemaType;
