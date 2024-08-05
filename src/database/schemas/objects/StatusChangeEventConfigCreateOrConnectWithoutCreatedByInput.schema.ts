/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateOrConnectWithoutCreatedByInput>;
export const StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
