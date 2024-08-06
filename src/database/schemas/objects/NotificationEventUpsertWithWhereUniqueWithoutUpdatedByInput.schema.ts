/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventUpdateWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutUpdatedByInput.schema';
import { NotificationEventCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventCreateWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
