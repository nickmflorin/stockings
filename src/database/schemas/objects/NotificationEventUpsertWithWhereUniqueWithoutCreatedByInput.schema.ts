/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventUpdateWithoutCreatedByInput.schema';
import { NotificationEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutCreatedByInput.schema';
import { NotificationEventCreateWithoutCreatedByInputObjectSchema } from './NotificationEventCreateWithoutCreatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput>;
export const NotificationEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
