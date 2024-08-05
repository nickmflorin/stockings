/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutNotificationConfigsInputObjectSchema } from './ProductCreateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationConfigsInput.schema';
import { ProductCreateOrConnectWithoutNotificationConfigsInputObjectSchema } from './ProductCreateOrConnectWithoutNotificationConfigsInput.schema';
import { ProductUpsertWithoutNotificationConfigsInputObjectSchema } from './ProductUpsertWithoutNotificationConfigsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutNotificationConfigsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutNotificationConfigsInput.schema';
import { ProductUpdateWithoutNotificationConfigsInputObjectSchema } from './ProductUpdateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedUpdateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedUpdateWithoutNotificationConfigsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateOneRequiredWithoutNotificationConfigsNestedInput>;
export const ProductUpdateOneRequiredWithoutNotificationConfigsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutNotificationConfigsInputObjectSchema).optional(), upsert: z.lazy(() => ProductUpsertWithoutNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUpdateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutNotificationConfigsInputObjectSchema)]).optional()
}).strict() as SchemaType;
