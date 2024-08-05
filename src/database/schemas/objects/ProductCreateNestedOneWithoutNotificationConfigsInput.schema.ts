/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutNotificationConfigsInputObjectSchema } from './ProductCreateWithoutNotificationConfigsInput.schema';
import { ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema } from './ProductUncheckedCreateWithoutNotificationConfigsInput.schema';
import { ProductCreateOrConnectWithoutNotificationConfigsInputObjectSchema } from './ProductCreateOrConnectWithoutNotificationConfigsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCreateNestedOneWithoutNotificationConfigsInput>;
export const ProductCreateNestedOneWithoutNotificationConfigsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutNotificationConfigsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutNotificationConfigsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutNotificationConfigsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
