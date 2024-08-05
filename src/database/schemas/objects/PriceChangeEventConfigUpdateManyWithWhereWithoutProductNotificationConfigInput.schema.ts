/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigScalarWhereInputObjectSchema } from './PriceChangeEventConfigScalarWhereInput.schema';
import { PriceChangeEventConfigUpdateManyMutationInputObjectSchema } from './PriceChangeEventConfigUpdateManyMutationInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInput>;
export const PriceChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => PriceChangeEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
