/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUpdateWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const NotificationEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
