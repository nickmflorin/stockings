/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUpdateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInput>;
export const StatusChangeEventConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
