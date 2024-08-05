/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema } from './UserCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input.schema';
import { UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema } from './UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input>;
export const UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema)])
}).strict() as SchemaType;
