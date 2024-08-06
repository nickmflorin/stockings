/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutNotificationEventsInputObjectSchema } from './ProductCreateWithoutNotificationEventsInput.schema';
import { ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationEventsInput.schema';
import { ProductCreateOrConnectWithoutNotificationEventsInputObjectSchema } from './ProductCreateOrConnectWithoutNotificationEventsInput.schema';
import { ProductUpsertWithoutNotificationEventsInputObjectSchema } from './ProductUpsertWithoutNotificationEventsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutNotificationEventsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutNotificationEventsInput.schema';
import { ProductUpdateWithoutNotificationEventsInputObjectSchema } from './ProductUpdateWithoutNotificationEventsInput.schema';
import { ProductUncheckedUpdateWithoutNotificationEventsInputObjectSchema } from './ProductUncheckedUpdateWithoutNotificationEventsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateOneRequiredWithoutNotificationEventsNestedInput>;
export const ProductUpdateOneRequiredWithoutNotificationEventsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationEventsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutNotificationEventsInputObjectSchema).optional(), upsert: z.lazy(() => ProductUpsertWithoutNotificationEventsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUpdateWithoutNotificationEventsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutNotificationEventsInputObjectSchema)]).optional()
}).strict() as SchemaType;
