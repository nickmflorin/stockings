/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutProductInputObjectSchema } from './StatusChangeEventUpdateWithoutProductInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateWithWhereUniqueWithoutProductInput>;
export const StatusChangeEventUpdateWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
