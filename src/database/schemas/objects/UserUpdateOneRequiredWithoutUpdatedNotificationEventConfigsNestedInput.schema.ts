/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUpsertWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUpsertWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUpdateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedNotificationEventConfigsNestedInput>;
export const UserUpdateOneRequiredWithoutUpdatedNotificationEventConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutUpdatedNotificationEventConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedNotificationEventConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
