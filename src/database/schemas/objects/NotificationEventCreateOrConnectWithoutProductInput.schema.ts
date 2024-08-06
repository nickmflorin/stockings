/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventCreateWithoutProductInputObjectSchema } from './NotificationEventCreateWithoutProductInput.schema';
import { NotificationEventUncheckedCreateWithoutProductInputObjectSchema } from './NotificationEventUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateOrConnectWithoutProductInput>;
export const NotificationEventCreateOrConnectWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => NotificationEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
