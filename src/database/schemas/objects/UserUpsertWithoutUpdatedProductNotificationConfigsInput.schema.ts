/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutUpdatedProductNotificationConfigsInput>;
export const UserUpsertWithoutUpdatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
