/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';
import { StatusChangeEventUpdateManyMutationInputObjectSchema } from './StatusChangeEventUpdateManyMutationInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateManyWithWhereWithoutProductInput>;
export const StatusChangeEventUpdateManyWithWhereWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
