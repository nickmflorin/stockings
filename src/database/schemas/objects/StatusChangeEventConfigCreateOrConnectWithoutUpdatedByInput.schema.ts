/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInput>;
export const StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
