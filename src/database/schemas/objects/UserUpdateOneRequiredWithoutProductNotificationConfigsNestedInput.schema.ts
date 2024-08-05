/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutProductNotificationConfigsInput.schema';
import { UserCreateOrConnectWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateOrConnectWithoutProductNotificationConfigsInput.schema';
import { UserUpsertWithoutProductNotificationConfigsInputObjectSchema } from './UserUpsertWithoutProductNotificationConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutProductNotificationConfigsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutProductNotificationConfigsInput.schema';
import { UserUpdateWithoutProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutProductNotificationConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutProductNotificationConfigsNestedInput>;
export const UserUpdateOneRequiredWithoutProductNotificationConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProductNotificationConfigsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutProductNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutProductNotificationConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
