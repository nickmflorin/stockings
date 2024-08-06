/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventCreateWithoutUserInputObjectSchema } from './StatusChangeEventCreateWithoutUserInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateOrConnectWithoutUserInput>;
export const StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
