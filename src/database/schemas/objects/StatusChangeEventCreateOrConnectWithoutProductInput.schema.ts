/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventCreateWithoutProductInputObjectSchema } from './StatusChangeEventCreateWithoutProductInput.schema';
import { StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateOrConnectWithoutProductInput>;
export const StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
