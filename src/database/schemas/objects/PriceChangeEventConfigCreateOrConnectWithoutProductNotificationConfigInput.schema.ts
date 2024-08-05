/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInput>;
export const PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
