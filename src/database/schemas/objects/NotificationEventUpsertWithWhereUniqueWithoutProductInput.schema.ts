/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutProductInputObjectSchema } from './NotificationEventUpdateWithoutProductInput.schema';
import { NotificationEventUncheckedUpdateWithoutProductInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutProductInput.schema';
import { NotificationEventCreateWithoutProductInputObjectSchema } from './NotificationEventCreateWithoutProductInput.schema';
import { NotificationEventUncheckedCreateWithoutProductInputObjectSchema } from './NotificationEventUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpsertWithWhereUniqueWithoutProductInput>;
export const NotificationEventUpsertWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventUpdateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutProductInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
