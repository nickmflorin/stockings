/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserCreateWithoutUpdatedProductNotificationConfigsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInput>;
export const UserCreateOrConnectWithoutUpdatedProductNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
