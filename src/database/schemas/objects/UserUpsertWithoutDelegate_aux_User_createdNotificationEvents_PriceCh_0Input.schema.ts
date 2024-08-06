/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema } from './UserUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0Input.schema';
import { UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema } from './UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0Input.schema';
import { UserCreateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema } from './UserCreateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0Input.schema';
import { UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema } from './UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0Input.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0Input>;
export const UserUpsertWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEvents_PriceCh_0InputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
