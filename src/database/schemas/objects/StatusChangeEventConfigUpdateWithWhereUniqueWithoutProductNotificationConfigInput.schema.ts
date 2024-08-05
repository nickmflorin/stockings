/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUpdateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
