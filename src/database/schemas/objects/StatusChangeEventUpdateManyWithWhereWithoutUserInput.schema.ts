/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventScalarWhereInputObjectSchema } from './StatusChangeEventScalarWhereInput.schema';
import { StatusChangeEventUpdateManyMutationInputObjectSchema } from './StatusChangeEventUpdateManyMutationInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateManyWithWhereWithoutUserInput>;
export const StatusChangeEventUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
