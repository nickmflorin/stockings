/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutUserInputObjectSchema } from './StatusChangeEventCreateWithoutUserInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUserInput.schema';
import { StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutUserInput.schema';
import { StatusChangeEventCreateManyUserInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyUserInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedCreateNestedManyWithoutUserInput>;
export const StatusChangeEventUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
