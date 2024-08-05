/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInput>;
export const UserCreateNestedOneWithoutUpdatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedNotificationEventConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
