/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutProductInputObjectSchema } from './NotificationEventUpdateWithoutProductInput.schema';
import { NotificationEventUncheckedUpdateWithoutProductInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateWithWhereUniqueWithoutProductInput>;
export const NotificationEventUpdateWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
