/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema } from './UserCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0Input.schema';
import { UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema } from './UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0Input.schema';
import { UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema } from './UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0Input.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0Input>;
export const UserCreateNestedOneWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEventConfigs_S_0InputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
