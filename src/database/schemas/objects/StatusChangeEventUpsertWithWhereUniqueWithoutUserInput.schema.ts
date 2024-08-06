/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventUpdateWithoutUserInputObjectSchema } from './StatusChangeEventUpdateWithoutUserInput.schema';
import { StatusChangeEventUncheckedUpdateWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedUpdateWithoutUserInput.schema';
import { StatusChangeEventCreateWithoutUserInputObjectSchema } from './StatusChangeEventCreateWithoutUserInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUpsertWithWhereUniqueWithoutUserInput>;
export const StatusChangeEventUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventUpdateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
