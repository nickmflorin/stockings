/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUpdateWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateWithWhereUniqueWithoutCreatedByInput>;
export const NotificationEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
