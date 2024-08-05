/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';
import { ProductNotificationConfigUpdateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUpdateWithoutEventConfigsInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpdateToOneWithWhereWithoutEventConfigsInput>;
export const ProductNotificationConfigUpdateToOneWithWhereWithoutEventConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutEventConfigsInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema)])
}).strict() as SchemaType;
