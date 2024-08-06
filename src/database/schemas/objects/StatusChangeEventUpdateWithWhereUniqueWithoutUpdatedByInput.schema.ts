/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUpdateWithoutUpdatedByInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const StatusChangeEventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
