/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUpsertWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUpsertWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedProductNotificationConfigsNestedInput>;
export const UserUpdateOneRequiredWithoutUpdatedProductNotificationConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutUpdatedProductNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
