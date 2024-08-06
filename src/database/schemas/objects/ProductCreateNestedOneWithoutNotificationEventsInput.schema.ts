/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutNotificationEventsInputObjectSchema } from './ProductCreateWithoutNotificationEventsInput.schema';
import { ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationEventsInput.schema';
import { ProductCreateOrConnectWithoutNotificationEventsInputObjectSchema } from './ProductCreateOrConnectWithoutNotificationEventsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateNestedOneWithoutNotificationEventsInput>;
export const ProductCreateNestedOneWithoutNotificationEventsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
