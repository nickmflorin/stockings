/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserCreateOrConnectWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedProductNotificationConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedProductNotificationConfigsInput>;
export const UserCreateNestedOneWithoutCreatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedProductNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
