/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from './NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUpdateWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedUpdateWithoutUpdatedByInput.schema';
import { NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigCreateWithoutUpdatedByInput.schema';
import { NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const NotificationEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
