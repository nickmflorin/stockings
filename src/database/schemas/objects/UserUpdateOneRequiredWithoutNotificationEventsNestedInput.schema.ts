/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutNotificationEventsInputObjectSchema } from './UserCreateWithoutNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationEventsInput.schema';
import { UserCreateOrConnectWithoutNotificationEventsInputObjectSchema } from './UserCreateOrConnectWithoutNotificationEventsInput.schema';
import { UserUpsertWithoutNotificationEventsInputObjectSchema } from './UserUpsertWithoutNotificationEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutNotificationEventsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutNotificationEventsInput.schema';
import { UserUpdateWithoutNotificationEventsInputObjectSchema } from './UserUpdateWithoutNotificationEventsInput.schema';
import { UserUncheckedUpdateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationEventsNestedInput>;
export const UserUpdateOneRequiredWithoutNotificationEventsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationEventsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutNotificationEventsInputObjectSchema)]).optional()
}).strict() as SchemaType;
