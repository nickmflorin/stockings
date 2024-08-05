/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedNotificationEventConfigsInput.schema';
import { UserCreateOrConnectWithoutCreatedNotificationEventConfigsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedNotificationEventConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedNotificationEventConfigsInput>;
export const UserCreateNestedOneWithoutCreatedNotificationEventConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedNotificationEventConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedNotificationEventConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedNotificationEventConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
