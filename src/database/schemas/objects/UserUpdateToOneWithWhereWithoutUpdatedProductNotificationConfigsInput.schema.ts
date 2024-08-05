/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUpdateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedProductNotificationConfigsInput>;
export const UserUpdateToOneWithWhereWithoutUpdatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
