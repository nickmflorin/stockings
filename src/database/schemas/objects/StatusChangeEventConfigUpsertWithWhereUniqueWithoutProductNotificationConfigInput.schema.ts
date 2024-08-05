/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUpdateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
