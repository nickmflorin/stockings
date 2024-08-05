/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigScalarWhereInputObjectSchema } from './StatusChangeEventConfigScalarWhereInput.schema';
import { StatusChangeEventConfigUpdateManyMutationInputObjectSchema } from './StatusChangeEventConfigUpdateManyMutationInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInput>;
export const StatusChangeEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
