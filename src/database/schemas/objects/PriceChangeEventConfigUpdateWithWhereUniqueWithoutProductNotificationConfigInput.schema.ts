/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUpdateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInput>;
export const PriceChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
