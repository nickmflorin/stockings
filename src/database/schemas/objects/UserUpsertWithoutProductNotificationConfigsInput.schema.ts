/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutProductNotificationConfigsInput.schema';
import { UserCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutProductNotificationConfigsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutProductNotificationConfigsInput>;
export const UserUpsertWithoutProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutProductNotificationConfigsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutProductNotificationConfigsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
