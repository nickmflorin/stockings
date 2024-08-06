/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserCreateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserUpsertWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserUpsertWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserUpdateToOneWithWhereWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserUpdateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserUpdateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';
import { UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema } from './UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0Input.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0NestedInput>;
export const UserUpdateOneRequiredWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0NestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema),
    z.lazy(() => UserUpdateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutDelegate_aux_User_createdNotificationEvents_StatusC_0InputObjectSchema)]).optional()
}).strict() as SchemaType;
