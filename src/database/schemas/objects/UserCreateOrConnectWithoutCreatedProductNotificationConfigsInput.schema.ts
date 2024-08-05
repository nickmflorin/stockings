/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedProductNotificationConfigsInput>;
export const UserCreateOrConnectWithoutCreatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
