/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutProductInputObjectSchema } from './ProductNotificationConfigUpdateWithoutProductInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutProductInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateWithWhereUniqueWithoutProductInput>;
export const ProductNotificationConfigUpdateWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
