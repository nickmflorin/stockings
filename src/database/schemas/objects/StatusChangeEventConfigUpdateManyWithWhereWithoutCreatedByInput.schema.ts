/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigScalarWhereInputObjectSchema } from './StatusChangeEventConfigScalarWhereInput.schema';
import { StatusChangeEventConfigUpdateManyMutationInputObjectSchema } from './StatusChangeEventConfigUpdateManyMutationInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateManyWithWhereWithoutCreatedByInput>;
export const StatusChangeEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
