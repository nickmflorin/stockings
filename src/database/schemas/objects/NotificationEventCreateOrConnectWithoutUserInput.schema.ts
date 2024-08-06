/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventCreateWithoutUserInputObjectSchema } from './NotificationEventCreateWithoutUserInput.schema';
import { NotificationEventUncheckedCreateWithoutUserInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateOrConnectWithoutUserInput>;
export const NotificationEventCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
