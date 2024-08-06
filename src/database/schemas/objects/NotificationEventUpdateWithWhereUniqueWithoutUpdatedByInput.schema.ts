/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventUpdateWithoutUpdatedByInput.schema';
import { NotificationEventUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
