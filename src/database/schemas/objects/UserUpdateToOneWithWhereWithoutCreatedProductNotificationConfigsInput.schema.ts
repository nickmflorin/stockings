/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutCreatedProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedProductNotificationConfigsInput>;
export const UserUpdateToOneWithWhereWithoutCreatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
