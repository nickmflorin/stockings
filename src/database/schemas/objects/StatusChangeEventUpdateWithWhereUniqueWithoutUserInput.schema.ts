/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutUserInputObjectSchema } from './StatusChangeEventUpdateWithoutUserInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpdateWithWhereUniqueWithoutUserInput>;
export const StatusChangeEventUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventUpdateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
