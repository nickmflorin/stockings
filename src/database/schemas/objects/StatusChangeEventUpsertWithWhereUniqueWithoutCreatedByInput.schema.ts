/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUpdateWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutCreatedByInput.schema';
import { StatusChangeEventCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpsertWithWhereUniqueWithoutCreatedByInput>;
export const StatusChangeEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutCreatedByInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
