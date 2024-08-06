/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedNotificationEventsInput.schema';
import { UserCreateOrConnectWithoutUpdatedNotificationEventsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedNotificationEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedNotificationEventsInput>;
export const UserCreateNestedOneWithoutUpdatedNotificationEventsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
