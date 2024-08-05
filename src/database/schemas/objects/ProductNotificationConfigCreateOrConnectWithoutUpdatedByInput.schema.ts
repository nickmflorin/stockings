/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from './ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateWithoutUpdatedByInput.schema';
import { ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ProductNotificationConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateOrConnectWithoutUpdatedByInput>;
export const ProductNotificationConfigCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductNotificationConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductNotificationConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
