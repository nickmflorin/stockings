/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema } from './UserUpdateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input.schema';
import { UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema } from './UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0Input>;
export const UserUpdateToOneWithWhereWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEventConfigs_P_0InputObjectSchema)])
}).strict() as SchemaType;
