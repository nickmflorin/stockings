/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInput>;
export const UserCreateNestedOneWithoutUpdatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
