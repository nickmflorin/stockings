/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserCreateOrConnectWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUpsertWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUpsertWithoutCreatedProductNotificationConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedProductNotificationConfigsNestedInput>;
export const UserUpdateOneRequiredWithoutCreatedProductNotificationConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedProductNotificationConfigsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutCreatedProductNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
