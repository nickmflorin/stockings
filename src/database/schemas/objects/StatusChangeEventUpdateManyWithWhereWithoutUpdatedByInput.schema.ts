/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';
import { StatusChangeEventUpdateManyMutationInputObjectSchema } from './StatusChangeEventUpdateManyMutationInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateManyWithWhereWithoutUpdatedByInput>;
export const StatusChangeEventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
