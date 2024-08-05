/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUpdateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInput>;
export const StatusChangeEventConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
