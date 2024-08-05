/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutProductNotificationConfigsInput.schema';
import { UserCreateOrConnectWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateOrConnectWithoutProductNotificationConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutProductNotificationConfigsInput>;
export const UserCreateNestedOneWithoutProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProductNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
