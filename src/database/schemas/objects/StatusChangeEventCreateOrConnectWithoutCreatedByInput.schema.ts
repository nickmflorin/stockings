/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateOrConnectWithoutCreatedByInput>;
export const StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
