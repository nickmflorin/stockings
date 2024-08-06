/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';
import { StatusChangeEventUpdateManyMutationInputObjectSchema } from './StatusChangeEventUpdateManyMutationInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateManyWithWhereWithoutCreatedByInput>;
export const StatusChangeEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
