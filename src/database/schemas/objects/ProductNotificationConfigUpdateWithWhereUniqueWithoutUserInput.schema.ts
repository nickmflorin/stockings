/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutUserInputObjectSchema } from './ProductNotificationConfigUpdateWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateWithWhereUniqueWithoutUserInput>;
export const ProductNotificationConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
