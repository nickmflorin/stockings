/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventUpdateWithoutCreatedByInput.schema';
import { NotificationEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput>;
export const NotificationEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
