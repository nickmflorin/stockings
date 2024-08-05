/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUpdateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInput>;
export const PriceChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema)]), create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
