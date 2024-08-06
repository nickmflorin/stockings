/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutProductInputObjectSchema } from './StatusChangeEventUpdateWithoutProductInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutProductInput.schema';
import { StatusChangeEventCreateWithoutProductInputObjectSchema } from './StatusChangeEventCreateWithoutProductInput.schema';
import { StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpsertWithWhereUniqueWithoutProductInput>;
export const StatusChangeEventUpsertWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventUpdateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutProductInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
