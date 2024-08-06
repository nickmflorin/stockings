/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUpdateWithoutUpdatedByInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutUpdatedByInput.schema';
import { StatusChangeEventCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const StatusChangeEventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
