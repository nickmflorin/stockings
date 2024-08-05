/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutProductNotificationConfigsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutProductNotificationConfigsInput>;
export const UserCreateOrConnectWithoutProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
