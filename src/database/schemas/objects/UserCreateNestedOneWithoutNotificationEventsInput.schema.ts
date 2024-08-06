/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutNotificationEventsInputObjectSchema } from './UserCreateWithoutNotificationEventsInput.schema';
import { UserUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationEventsInput.schema';
import { UserCreateOrConnectWithoutNotificationEventsInputObjectSchema } from './UserCreateOrConnectWithoutNotificationEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationEventsInput>;
export const UserCreateNestedOneWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
