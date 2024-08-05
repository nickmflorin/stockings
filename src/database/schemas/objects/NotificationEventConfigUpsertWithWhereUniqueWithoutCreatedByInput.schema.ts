/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUpdateWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedUpdateWithoutCreatedByInput.schema';
import { NotificationEventConfigCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutCreatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpsertWithWhereUniqueWithoutCreatedByInput>;
export const NotificationEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
