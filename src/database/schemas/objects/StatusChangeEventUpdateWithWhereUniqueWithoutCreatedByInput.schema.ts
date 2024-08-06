/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUpdateWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateWithWhereUniqueWithoutCreatedByInput>;
export const StatusChangeEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
