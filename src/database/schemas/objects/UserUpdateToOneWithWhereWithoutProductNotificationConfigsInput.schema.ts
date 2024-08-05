/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutProductNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProductNotificationConfigsInput>;
export const UserUpdateToOneWithWhereWithoutProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutProductNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
