/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutCreatedProductNotificationConfigsInput>;
export const UserUpsertWithoutCreatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductNotificationConfigsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
