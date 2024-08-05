/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserCreateOrConnectWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUpsertWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUpsertWithoutCreatedNotificationEventConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUpdateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedNotificationEventConfigsNestedInput>;
export const UserUpdateOneRequiredWithoutCreatedNotificationEventConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedNotificationEventConfigsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutCreatedNotificationEventConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedNotificationEventConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
