/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
