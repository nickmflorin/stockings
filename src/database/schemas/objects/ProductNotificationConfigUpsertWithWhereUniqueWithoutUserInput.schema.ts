/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigUpdateWithoutUserInputObjectSchema } from './ProductNotificationConfigUpdateWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedUpdateWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedUpdateWithoutUserInput.schema';
import { ProductNotificationConfigCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigCreateWithoutUserInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUpsertWithWhereUniqueWithoutUserInput>;
export const ProductNotificationConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ProductNotificationConfigUpdateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUserInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
