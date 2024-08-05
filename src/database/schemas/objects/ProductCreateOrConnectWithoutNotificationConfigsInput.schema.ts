/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutNotificationConfigsInputObjectSchema } from './ProductCreateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutNotificationConfigsInput>;
export const ProductCreateOrConnectWithoutNotificationConfigsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema)])
}).strict() as SchemaType;
