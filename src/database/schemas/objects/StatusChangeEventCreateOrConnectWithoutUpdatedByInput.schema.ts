/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateOrConnectWithoutUpdatedByInput>;
export const StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
